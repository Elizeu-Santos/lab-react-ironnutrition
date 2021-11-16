unction SearchBar(props) {
    return (
      <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        onKeyUp={(event) => props.filterFoods(event.target.value)}
      />
    );
  }
  
  export default SearchBar;
  © 2021 GitHub, Inc.
  Terms
  Privacy