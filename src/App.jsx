import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchBtn from "./components/SearchBtn";
import Forecast from "./components/Forecast";
import Card from "./components/Card";
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
    console.log(data);
  };

  return (
    <main className="w-screen h-screen bg-[url('weather-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-start items-center py-4">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl font-arist-light tracking-wider font-bold text-white text-center px-12 animate-bounce text-shadow-sm text-shadow-sky-800 hover:cursor-default">
          How's the sky today?
        </h1>
        {!showingBar ? (
          <SearchBtn
            className="text-3xl font-bold text-sky-500 shadow-md shadow-blue-300 font-arist-light hover:scale-105 hover:cursor-pointer transition duration-50"
            onClick={() => setShowingBar(true)}
          >
            Search
          </SearchBtn>
        ) : (
          <SearchBar onKeyDown={(e) => e.key === "Enter" && handleSearch(e)} />
        )}
      </div>

      {active && data && (
        <Forecast className="shadow-md shadow-black grid grid-cols-3 gap-2 rounded-lg p-4">
          <Card>
            <img src="src\assets\icons\sun.png" alt="Sunny" className="w-28 h-28 animate-spin" style={{ animationDuration: "10s" }} />
            <p className="text-lg text-slate-700">
              {data.weather?.[0]?.description
                ?.split(" ")
                .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                .join(" ")}
            </p>
          </Card>
          <Card className="bg-linear-to-b from-sky-300 to-sky-100 shadow-md shadow-sky-800">
            <SearchBtn className="flex justify-center items-center shadow-md font-bold text-3xl text-sky-500">
              {Math.round(data.main?.temp - 273.15)} Cº
            </SearchBtn>
            <div className="flex flex-col justify-center items-center">
              <p className="text-3xl font-arist">
                {data.name}, {data.sys?.country}
              </p>
              <p className="text-lg text-slate-700">
                {data.weather?.[0]?.main}
              </p>
              <p className="text-base text-slate-600">
                Humidity: {data.main?.humidity}%
              </p>
            </div>
          </Card>
          <Card className="gap-8">
            {/* data.coord.lat */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="text-2xl font-arist text-sky-500">Coordinates</h3>
              <ul className="flex flex-col justify-center items-center">
                <li className="text-lg text-slate-700">
                  Latitude: {data.coord?.lat}
                </li>
                <li className="text-lg text-slate-700">
                  Longitude: {data.coord?.lon}
                </li>
              </ul>
            </div>

            {/* data.coord.lon */}
            <div className="flex flex-col justify-center items-center gap-1">
              <h3 className="text-2xl font-arist text-sky-500">Wind</h3>
              <ul className="flex flex-col justify-center items-center">
                <li className="text-lg text-slate-700">
                  Speed: {data.wind?.speed} m/s
                </li>
                <li className="text-lg text-slate-700">
                  Direction: {data.wind?.deg}°
                </li>
              </ul>
            </div>
          </Card>
        </Forecast>
      )}
    </main>
  );
}

export default App;
