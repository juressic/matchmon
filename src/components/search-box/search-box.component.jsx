import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  //console.log('Search props:' + this.props);
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  );
};

export default SearchBox;
