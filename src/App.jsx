import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchBtn from "./components/SearchBtn";
import Forecast from "./components/Forecast";
import { useState } from "react";

function App() {
  const [showingBar, setShowingBar] = useState(false);
  const active = false;

  return (
    <main className="w-screen h-screen bg-[url('weather-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl font-arist-light tracking-wider font-bold text-white text-center px-12 animate-bounce text-shadow-sm text-shadow-sky-800 hover:cursor-default">
          How's the sky today?
        </h1>
        {!showingBar ? (
          <SearchBtn
            className="text-3xl font-bold text-sky-500 shadow-md shadow-blue-300 font-arist-light hover:scale-105 hover:cursor-pointer transition duration-50"
            onClick={() => setShowingBar(true)}
          >Search</SearchBtn>
        ) : (
          <SearchBar className="animate-fade-in" />
        )}
      </div>

      {active && <Forecast />}
    </main>
  );
}

export default App;
