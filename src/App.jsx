import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchBtn from "./components/SearchBtn";
import Forecast from "./components/Forecast";
import Card from "./components/Card";
import Footer from "./layouts/Footer";
import { useState } from "react";

function App() {
  const [showingBar, setShowingBar] = useState(false);
  const [active, setActive] = useState(false);
  const [data, setData] = useState(null);

  const handleSearch = async (e) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=27479e348a29a9ac81c0fdbb56e43af9`,
    );
    const data = await response.json();
    setActive(true);
    setData(data);

    e.target.value = "";
    console.log(data);
  };

  // Themes
  const currentWeather = {
    Clouds: {
      color: "text-slate-700",
      img: "src/assets/icons/cloudy.png",
      gradient: "from-slate-400 to-slate-200",
    },
    Rain: {
      color: "text-blue-500",
      img: "src/assets/icons/rainy.png",
      gradient: "from-blue-400 to-blue-200",
    },
    Drizzle: {
      color: "text-blue-500",
      img: "src/assets/icons/drizzle.png",
      gradient: "from-blue-400 to-blue-200",
    },
    Thunderstorm: {
      color: "text-blue-500",
      img: "src/assets/icons/rainy.png",
      gradient: "from-blue-400 to-blue-200",
    },
    Snow: {
      color: "text-cyan-500",
      img: "src/assets/icons/snowy.png",
      gradient: "from-cyan-400 to-cyan-200",
    },
    Atmosphere: {
      color: "text-slate-700",
      img: "src/assets/icons/mist.png",
      gradient: "from-slate-400 to-slate-200",
    },
    default: {
      color: "text-sky-500",
      img: "src/assets/icons/sun.png",
      gradient: "from-sky-300 to-sky-100 shadow-md shadow-sky-800",
    },
  };
  const theme =
    currentWeather[data?.weather?.[0]?.main] || currentWeather.default;

  return (
    <div className="min-h-screen flex flex-col">
      <main
        className={`bg-[url('weather-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col flex-1 justify-center items-center px-4 py-8 overflow-y-auto ${active && "gap-6"}`}
      >
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-arist-light tracking-wider font-bold text-white text-center px-4 animate-bounce text-shadow-sm text-shadow-sky-800 hover:cursor-default">
            How's the sky today?
          </h1>
          {!showingBar ? (
            <SearchBtn
              className="w-24 h-24 md:w-30 md:h-30 text-2xl md:text-3xl font-bold text-sky-500 shadow-md shadow-blue-300 font-arist-light hover:scale-105 hover:cursor-pointer transition duration-50 mt-2 md:mt-5"
              onClick={() => setShowingBar(true)}
            >
              Search
            </SearchBtn>
          ) : (
            <SearchBar
              className="w-4/5 xs:w-3/5 md:w-3/7"
              onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
            />
          )}
        </div>

        {active && data && (
          <Forecast className="shadow-md shadow-black grid grid-cols-1 gap-2 sm:gap-3 rounded-lg p-3 xs:grid-cols-2 md:grid-cols-3">
            <Card
              className={`bg-linear-to-b ${theme.gradient} xs:col-span-2 md:col-span-1 md:order-1`}
            >
              <SearchBtn
                className={`w-24 h-24 flex justify-center items-center shadow-md font-bold text-2xl ${theme.color}`}
              >
                {Math.round(data.main?.temp - 273.15)} Cº
              </SearchBtn>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-arist text-slate-800 leading-6">
                  {data.name}{" "}
                  <span className="text-base text-slate-800">
                    ({data.sys?.country})
                  </span>
                </h2>
                <p className="text-base text-slate-700">
                  {/* <img src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}.png`} alt="Weather Icon" className="w-6 h-6 inline-block ml-2" /> */}
                  {data.weather?.[0]?.main}
                </p>
                <p className="text-sm text-slate-600">
                  Humidity: {data.main?.humidity}%
                </p>
              </div>
            </Card>

            <Card className="md:order-0">
              <img
                src={theme.img}
                alt="Weather Icon"
                className="w-28 h-28"
              />
              <p className="text-base text-slate-700">
                {data.weather?.[0]?.description
                  ?.split(" ")
                  .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                  .join(" ")}
              </p>
            </Card>
            <Card className="gap-8 md:order-2">
              {/* data.coord.lat */}
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className={`text-xl font-arist ${theme.color}`}>
                  Coordinates
                </h3>
                <ul className="flex flex-col justify-center items-center">
                  <li className="text-base text-slate-700">
                    Latitude: {data.coord?.lat}
                  </li>
                  <li className="text-base text-slate-700">
                    Longitude: {data.coord?.lon}
                  </li>
                </ul>
              </div>
              {/* data.coord.lon */}
              <div className="flex flex-col justify-center items-center gap-1">
                <h3 className={`text-xl font-arist ${theme.color}`}>Wind</h3>
                <ul className="flex flex-col justify-center items-center">
                  <li className="text-base text-slate-700">
                    Speed: {data.wind?.speed} m/s
                  </li>
                  <li className="text-base text-slate-700">
                    Direction: {data.wind?.deg}°
                  </li>
                </ul>
              </div>
            </Card>
          </Forecast>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
