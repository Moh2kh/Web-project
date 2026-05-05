export default function DataList({ movies }) {
  return (
    <div className="list">
      {movies.length === 0 ? (
        <p style={{ textAlign: "center" }}>No movies found.</p>
      ) : 
      (
        movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>📅 {movie.year}  &nbsp;&nbsp; ⭐ {movie.rating}</p>
          </div>
        ))
      )
      }
    </div>
  );
}