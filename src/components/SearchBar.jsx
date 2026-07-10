function SearchBar({ className, ...props }) {
  return (
    <div className={`w-full flex justify-center items-center ${className}`} {...props}>
      <input className="bg-white rounded-full shadow-md my-4 p-4 outline-0 w-1/2"
        type="text"
        name="search"
        placeholder="Search a new place..."
      />
    </div>
  );
}

export default SearchBar;
