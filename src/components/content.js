import React from "react";
import styled from "styled-components";
import Book from "./book";

const BookCollection = styled.div`
  margin: 10%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Content = (props) => {
  console.log("test", props.books);
  return props.books?.length > 0 ? (
    <BookCollection>
      {props.books.map((b) => (
        <Book
          auther={b.auther}
          shortDescripti={b.shortDescription}
          title={b.title}
          thumbnailUrl={b.thumbnailUrl}
        />
      ))}
    </BookCollection>
  ) : (
    "Error fetching Books !"
  );
};

export default Content;
