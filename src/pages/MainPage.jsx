import { useState } from "react";
import movies from "../data/movies";
import SearchSort from "../components/SearchSort";
import DataList from "../components/DataList";

export default function MainPage() {  
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("name-asc");

  const [ratingFilter, setRatingFilter] = useState("all");
  const filteredMovies = movies
    .filter((movie) =>
      movie.title.toLowerCase().startsWith(search.toLowerCase())
    )
    .sort((a, b) => {
  if (sortType === "name-asc") {
    return a.title.localeCompare(b.title);
  }

  if (sortType === "name-desc") {
    return b.title.localeCompare(a.title);
  }

  if (sortType === "year-asc") {
    return a.year - b.year;
  }

  if (sortType === "year-desc") {
    return b.year - a.year;
  }

  return 0;
});

  return (
    <div className="container">
      <h1 className="title">Movies</h1>

      <SearchSort
        search={search}
        setSearch={setSearch}
        sortType={sortType}
        setSortType={setSortType}
      />

      <DataList movies={filteredMovies} />
    </div>
  );
}