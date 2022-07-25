import React from "react";
import { Link } from "react-router-dom";

export function FirstPage() {
  return (
    <div>
      <Link to="/second">second로가기</Link>
    </div>
  );
}
export function Hello() {
  return (
    <>
      {" "}
      <div>
        <Link to="/second">second로가기</Link>
      </div>
      <div>안녕하세요 테스트입니다. daisy</div>
    </>
  );
}
