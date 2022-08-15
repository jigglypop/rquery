import React from "react";
import { render } from "@testing-library/react";
import {
  GetJustClassName,
  GetRQueryClassName,
  // GetRQeuryClassName,
} from "./JQuerySelect";
import App from "../App";
import { RQueryRootInit } from "../rquery";

describe("돔 선택 속도 테스트", () => {
  // test("일반 getElementById, 색깔바꾸기 체크", () => {
  //   render(<GetId />);
  // });
  // test("일반 querySelector, 색깔바꾸기 체크", () => {
  //   render(<GetClassName />);
  // });
  // test("ref querySelector, 색깔바꾸기 체크", () => {
  //   render(<GetRef />);
  // });

  const root = document.createElement("div");

  beforeAll(() => {
    const $ = RQueryRootInit();
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });
  test("일반 GetJustClassName 체크", () => {
    render(<GetJustClassName />);
  });
  test("rquery 체크", () => {
    render(<GetRQueryClassName />);
  });
  // test("rquery querySelector, rquery 색깔바꾸기 체크", () => {
  //   render(<GetRQeuryClassName />);
  // });
});
