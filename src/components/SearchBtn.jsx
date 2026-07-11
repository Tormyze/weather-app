function SearchBtn({ className, children, ...props }) {
  return (
    <button
      type="button"
      className={`flex justify-center items-center bg-white rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default SearchBtn;
