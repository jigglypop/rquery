import React from "react";
import { useEffect, useRef } from "react";
import Hello from "./components/Hello";
import { RQuery } from "./rquery";
import { $ } from ".";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  RQuery.ready(appRef);

  useEffect(() => {
    const N = 10 ** 6;
    for (let i = 0; i < N; i++) {
      // const app = $("#App2").get()[0];
      // const app = document.querySelector("#App2");
      const app = appRef.current?.querySelector("#App2");
      // console.log(appRef.current?.querySelector("#App2"));
    }
    // console.log($("#App2").merge($(".Hello")));
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
