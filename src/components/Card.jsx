function Card({ className, children, ...props }) {
  return (
    <article
      className={`flex flex-col gap-3 sm:gap-5 text-sm sm:text-base bg-white shadow-md shadow-slate-800 h-full w-full justify-center items-center text-center rounded-lg p-4 md:p-8 ${className}`}
      {...props}
    >
      {children}
    </article>
  );
}

export default Card;
