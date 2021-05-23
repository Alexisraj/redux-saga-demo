import React from "react";
import styled from "styled-components";
import GridLoader from "react-spinners/GridLoader";
import "./pages.css";

const LoadCss = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  width: 165px;
`;

const About = () => {
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
      About Us Page
      <div className="fullPage">
        <LoadCss>
          <GridLoader color={"black"} loading={true} size={50} />
        </LoadCss>
      </div>
    </div>
  );
};

export default About;
