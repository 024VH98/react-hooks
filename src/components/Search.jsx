

const Search = ({search, handleSearch, searchInput}) => {
  return (
    <div className="Search">
      <input type="text" value={search} onChange={handleSearch} ref={searchInput}/>
    </div>
  )
}

export default Search;
