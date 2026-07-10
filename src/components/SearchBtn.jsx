function SearchBtn({ className, children, ...props }) {
  return (
    <button type="button" className={`flex justify-center items-center bg-white rounded-full w-30 h-30 ${className}`} {...props}>
      {children}
    </button>
  );
}

export default SearchBtn;
