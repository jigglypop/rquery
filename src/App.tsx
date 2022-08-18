import React from "react";
import { useEffect, useRef } from "react";
import Hello from "./components/Hello";
import { RQuery } from "./rquery";
import { $ } from ".";
import { curry } from "./rquery/function/curry";
import { go } from "./rquery/function/go";
import { each, map } from "./rquery/function/map";
import { range } from "./rquery/function/range";
import { lazy } from "./rquery/lazy";
import { take } from "./rquery/function/take";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  RQuery.ready(appRef);

  useEffect(() => {
    const N = 1;
    for (let i = 0; i < N; i++) {}

    const add = (a: any, b: any) => {
      return a + b;
    };
    // go(
    //   range(1, 10),
    //   map((x: any) => x + 2),
    //   map((x: any) => x + 1),
    //   console.log
    // );
    go(
      lazy.range(1000000),
      lazy.map((x: number) => x + 1),
      take(10),
      console.log
    );
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
