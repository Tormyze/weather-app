import SearchBtn from "./SearchBtn";

function Forecast() {
  return (
    <section className="w-3/5 h-full flex flex-col justify-center items-center rounded-t-xl bg-white relative shadow-xl shadow-black">
      <SearchBtn className="absolute -top-10 flex justify-center items-center" />
    </section>
  );
}

export default Forecast;
