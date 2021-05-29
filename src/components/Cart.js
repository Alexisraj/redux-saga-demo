import React from "react";
import styled from "styled-components";
import "./pages.css";

const LoadCss = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  width: 165px;
`;

const Cart = () => {
  return (
    <div
      style={{
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        maxHeight: "1000px",
      }}
    >
      Cart Page
      <div className="">
        <LoadCss>
          {/* <GridLoader color={"black"} loading={true} size={50} /> */}
        </LoadCss>
      </div>
    </div>
  );
};

export default Cart;
