function SearchBar({ className, ...props }) {
  return (
    <input className={`bg-white text-gray-500 placeholder:text-gray-400 rounded-full shadow-md my-4 p-4 outline-0 w-1/2 ${className}`}
      type="text"
      name="search"
      placeholder="Search a new place..."
      {...props}
    />
  );
}

export default SearchBar;
