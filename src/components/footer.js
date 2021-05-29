import React from "react";
import "./footer.css";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100%;
  border: 3px solid #fff;
  padding: 20px;
`;
const ChildEle = styled.div`
  font-size: 2rem;
  color: #fff;
  height: 30%%;
  width: 30%;
  float: left;
  padding: 20px;
  text-align: center;
`;
const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <ContainerDiv>
          <ChildEle>Books</ChildEle>
          <ChildEle>Knowledge</ChildEle>
          <ChildEle>Share</ChildEle>

          <div style={{ width: "100%" }}>
            <p className="quote">
              Anyone who stops learning is old, whether at twenty or eighty
            </p>
            <div>
              <p className="quoteBy"> Henry Ford</p>
            </div>
          </div>
        </ContainerDiv>
      </div>
    </>
  );
};

export default Footer;
