import "./App.css";
import { AnimalList } from "./cmps/AnimalList/AnimalList";
import { SeasonClock } from "./cmps/SeasonClock/SeasonClock";
import { CountDown } from "./cmps/CountDown/CountDown";
import { WatcherApp } from "./cmps/WatcherApp/WatcherApp";
import MouseMonitor from "./cmps/MouseMonitor/MouseMonitor";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("clock");
  const renderPage = () => {
    switch (page) {
      case "clock":
        return <SeasonClock />;
      case "animals":
        return <AnimalList />;
      case "countdown":
        return (
          /* <CountDown
        startFrom={10}
        onDone={() => {
          console.log("Done!");
        }}
      /> */
          <CountDown
            toTime={Date.now() + 1000 * 10}
            startFrom={100}
            onDone={() => {
              console.log("It's Time!");
            }}
          />
        );
      case "watcher":
        return <WatcherApp />;
      case "mouseMonitor":
        return <MouseMonitor />;
      default:
        return null;
    }
  };
  return (
    <>
      <nav>
        <ul>
          <li onClick={() => setPage("clock")}>Clock</li>
          <li onClick={() => setPage("animals")}>Animals</li>
          <li onClick={() => setPage("countdown")}>Countdown</li>
          <li onClick={() => setPage("watcher")}>Watcher</li>
          <li onClick={() => setPage("mouseMonitor")}>Mouse Monitor</li>
        </ul>
      </nav>
      {renderPage()}
    </>
  );
}

export default App;
