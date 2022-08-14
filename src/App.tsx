import "./App.css";
import { useEffect, useRef } from "react";
import Hello from "./components/Hello";
import { RQuery } from "./rquery";
import { $ } from ".";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  RQuery.ready(appRef);

  useEffect(() => {
    console.log($(".Hello"));
  }, []);

  return (
    <div id="App" className="App" ref={appRef}>
      <div id="App2">
        <Hello />
        <Hello />
        <Hello />
        <div id="App21" style={{ display: "none" }}></div>
      </div>
      <div id="App3">
        <Hello />
      </div>
      <div id="App4">
        <div id="App5">
          <div id="App6"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
