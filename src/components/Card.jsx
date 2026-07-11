function Card({ className, children, ...props }) {
  return (
    <article
      className={`flex flex-col gap-5 bg-white shadow-md shadow-slate-800 h-full w-full justify-center items-center text-center rounded-lg p-4 ${className}`}
      {...props}
    >
      {children}
    </article>
  );
}

export default Card;
