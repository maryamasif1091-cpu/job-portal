function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Search job title..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
export default SearchBar;