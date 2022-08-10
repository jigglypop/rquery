import "./App.css";
import { useEffect, useRef } from "react";
import Hello from "./components/Hello";
import { RQeury } from "./rquery";
import { $ } from ".";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  RQeury.ready(appRef);
  useEffect(() => {
    console.log($("#App2").prev());
  }, []);

  return (
    <div id="App" className="App" ref={appRef}>
      <div id="App2">
        <Hello />
        <Hello />
        <Hello />
        <div id="App21"></div>
      </div>
      <div id="App3">
        <Hello />
      </div>
      <div id="App4"></div>
    </div>
  );
}

export default App;
