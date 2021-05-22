import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BookTile = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
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
`;
const BookRate = styled.p`
  color: grey;
  font-size: 22px;
`;

const Book = (props) => {
  return (
    <BookTile>
      <image
        alt="book Image"
        height={150}
        width={100}
        src={props.thumbnailUrl}
      />
      <h1>{props.title}</h1>
      {props.auther && props.auther.map((a) => <BookRate>{a}</BookRate>)}
      <p>{props.shortDescription}</p>
      <p>
        <button>Add to Cart</button>
      </p>
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
