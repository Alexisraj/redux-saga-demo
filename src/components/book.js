import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BookTile = styled.div`
  padding: 2%;
  margin: 2%;
  box-shadow: 0 0 1px 2px #1800ff;
  width: 300px;
  text-align: center;
  font-family: arial;
  :hover {
    box-shadow: 0 0 2px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  & button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  & button:hover {
    opacity: 0.7;
  }
  & img {
    padding-top: 10px;
    border: 1px solid grey;
  }
`;
const BookRate = styled.p`
  color: grey;
  font-size: 22px;
`;

const Book = (props) => {
  return (
    <BookTile>
      <img alt="book Image" height={150} width={100} src={props.thumbnailUrl} />
      <h4>{props.title}</h4>
      <p>By</p>
      {props.auther &&
        props.auther.slice(0, 1).map((a) => <BookRate>{a}</BookRate>)}
      <p>{props.shortDescription}</p>

      <div style={{ bottom: "5px" }}>
        <p>
          <button onClick={props.onClick}>Add to Cart</button>
        </p>
      </div>
    </BookTile>
  );
};

export default Book;
Book.propTypes = {
  auther: PropTypes.any,
  shortDescription: PropTypes.any,
  title: PropTypes.any,
  thumbnailUrl: PropTypes.any,
};
