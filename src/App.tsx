import React from "react";
import { useEffect, useRef } from "react";
import { $ } from ".";
import Hello from "./components/Hello";
import { RQuery } from "./rquery";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  RQuery.ready(appRef);

  useEffect(() => {
    const N = 1;
    for (let i = 0; i < N; i++) {
      console.log($("#App2").contents());
    }
  }, []);

  return (
    <div id="App" className="App" ref={appRef}>
      <div id="App2" className="A">
        <Hello />
        <Hello />
        <Hello />
        <div id="App21" className="A" style={{ display: "none" }}></div>
        <h1 className="A">Hello_h1</h1>
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
