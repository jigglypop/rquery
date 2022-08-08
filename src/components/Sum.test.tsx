import React, { useEffect } from "react";
import { render } from "@testing-library/react";
import {
  GetClassName,
  GetId,
  GetRef,
  // GetRQeuryClassName,
} from "./JQuerySelect";

describe("돔 선택 속도 테스트", () => {
  test("일반 getElementById, 색깔바꾸기 체크", () => {
    render(<GetId />);
  });
  test("일반 querySelector, 색깔바꾸기 체크", () => {
    render(<GetClassName />);
  });
  test("ref querySelector, 색깔바꾸기 체크", () => {
    render(<GetRef />);
  });
  // test("rquery querySelector, rquery 색깔바꾸기 체크", () => {
  //   render(<GetRQeuryClassName />);
  // });
});
