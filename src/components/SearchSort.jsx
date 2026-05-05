export default function SearchSort({
  search,
  setSearch,
  sortType,
  setSortType,
}) {
  return (
    <div className="controls">      
      <input
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
          <option value="year-asc">Year: Old → New</option>
          <option value="year-desc">Year: New → Old</option>
      </select>
    </div>
  );
}