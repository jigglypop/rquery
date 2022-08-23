import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { $ } from ".";
import Hello from "./components/Hello";
import { RQuery } from "./rquery";

export function useRQueryEffect() {
  const appRef = useRef<HTMLDivElement>(null);
  const [_, setValue] = useState();
  RQuery.ready(appRef, setValue);
  return appRef;
}

function App() {
  const appRef = useRQueryEffect();

  // const [$$, set$$] = $("#App2").css("color", "red").useGet();

  const func = (e: any) => console.log(e);
  useEffect(() => {
    const N = 1;
    for (let i = 0; i < N; i++) {
      // appRef.current?.addEventListener("click", func);
      $("#button").on("click", func);
    }
    return () => {
      // appRef.current?.removeEventListener("click", func);
      $("#button").off("click", func);
    };
  }, []);

  return (
    <div id="App" className="App" ref={appRef}>
      <button id="button">연습버튼</button>
      <div id="App2" className="A">
        <Hello />
        <Hello />
        <Hello />
        <input id="input" defaultValue={"Hello"} />
        <div id="App21" className="A" about="hello" style={{ display: "flex" }}>
          처음
        </div>
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
