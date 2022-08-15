import React, { useEffect, useRef } from "react";
import { $ } from "..";
// import { $ } from "../rquery/query";

let N = 10 ** 5;

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
function GetJustClassName() {
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
function GetRQueryClassName() {
  useEffect(() => {
    for (let i = 0; i < N; i++) {
      $("#sum");
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

export { GetId, GetRef, GetJustClassName, GetRQueryClassName };
