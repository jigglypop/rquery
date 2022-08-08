import "./App.css";
import { useEffect, useRef } from "react";
import Hello from "./components/Hello";
import { RQeury } from "./rquery";
import { $ } from ".";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  RQeury.ready(appRef);
  useEffect(() => {
    console.log($(".Hello").parent());
  }, []);

  return (
    <div id="App" className="App" ref={appRef}>
      <Hello />
      <Hello />
      <div id="App2">
        <Hello />
      </div>
      <div id="App3">
        <Hello />
      </div>
    </div>
  );
}

export default App;
