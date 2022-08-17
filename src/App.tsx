import React from "react";
import { useEffect, useRef } from "react";
import Hello from "./components/Hello";
import { RQuery } from "./rquery";
import { $ } from ".";
import { curry } from "./rquery/function/curry";
import { go } from "./rquery/function/go";
import { each } from "./rquery/function/map";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  RQuery.ready(appRef);

  useEffect(() => {
    const N = 1;
    for (let i = 0; i < N; i++) {}

    const add = (a: any, b: any) => {
      return a + b;
    };
    go([1, 2, 3, 4], (a: number) => a + 10, console.log);
    each([1, 2, 3], console.log);
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
