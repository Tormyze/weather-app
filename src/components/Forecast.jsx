function Forecast({ className, children, ...props }) {
  return (
    <section
      className={`w-4/5 h-full flex flex-col justify-center items-center rounded-t-xl bg-white/30 relative ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default Forecast;
