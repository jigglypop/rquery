import React, {
  MutableRefObject,
  useEffect,
  useInsertionEffect,
  useRef,
} from "react";
import { jQuery } from "./jquery";
// import { $ } from "../rquery/query";

let N = 10 ** 6;

function GetId() {
  useEffect(() => {
    for (let i = 0; i < N; i++) {
      let sums = document.getElementById("sum");
      if (sums) {
        sums.style.color = "red";
      }
    }
  }, []);
  return (
    <>
      <div id="sum" className="sum"></div>
    </>
  );
}
function GetClassName() {
  useEffect(() => {
    for (let i = 0; i < N; i++) {
      const note = document.querySelector("#sum") as HTMLElement;
      if (note) {
        note.style.color = "red";
      }
    }
  }, []);
  return (
    <>
      <div id="sum" className="sum"></div>
    </>
  );
}

// function GetRQeuryClassName() {
//   const ref: MutableRefObject<null> | null = useRef(null);
//   useEffect(() => {
//     for (let i = 0; i < N; i++) {
//       $(ref).css("color", "red");
//     }
//   }, []);
//   return (
//     <>
//       <div id="sum" className="sum" ref={ref}></div>
//     </>
//   );
// }

function GetRef() {
  const sumRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    for (let i = 0; i < N; i++) {
      // const note = sumRef.current?.querySelector("#sum") as HTMLElement;
      if (sumRef.current) {
        sumRef.current.style.color = "red";
      }
    }
  }, []);
  return (
    <>
      <div id="sum" className="sum" ref={sumRef}></div>
    </>
  );
}

export { GetId, GetRef, GetClassName };
