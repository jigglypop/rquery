import React, { useEffect } from "react";
import { $ } from "..";
// import { closure } from "..";
// import { Ready } from "../App";

function Hello() {
  useEffect(() => {
    // console.log($());
  }, []);
  return (
    <div className="Hello">
      <h1>hello</h1>
    </div>
  );
}

export default Hello;
