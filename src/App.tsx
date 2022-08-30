import { useEffect, useRef } from "react";
import { $ } from ".";
import Hello from "./components/Hello";
import { RQuery } from "./rquery";
import { R } from "./rquery/function/R";

export function useRQueryEffect() {
  const appRef = useRef<HTMLDivElement>(null);
  RQuery.ready(appRef);
  return appRef;
}

function App() {
  const appRef = useRQueryEffect();
  const divRef = useRef(null);

  const setValueA = () => $("#App21").css({ color: "red" });
  const setValueB = () => $("#App21").css({ color: "blue" });

  useEffect(() => {
    const N = 1;
    for (let i = 0; i < N; i++) {}
    return () => {
      console.log($(".Hello"));
    };
  }, []);

  return (
    <div id="App" className="App" ref={appRef}>
      <button id="buttonA" onClick={(e) => setValueA()}>
        연습버튼A
      </button>
      <button id="buttonB" onClick={() => setValueB()}>
        연습버튼B
      </button>
      <div id="App2" className="A">
        <Hello />
        <Hello />
        <Hello />
        <input id="input" defaultValue={"Hello"} />
        <div
          id="App21"
          className="A"
          about="hello"
          ref={divRef}
          style={{ opacity: 1 }}
        >
          <h2>처음</h2>
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
