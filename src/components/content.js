import React from "react";
import styled from "styled-components";

const Content = (props) => {
  console.log("test", props);
  return props.books?.length > 0
    ? props.books.map((b) => <div>{b.title}</div>)
    : "Books is empty";
};

export default Content;
