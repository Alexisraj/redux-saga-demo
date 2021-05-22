import React, { useEffect } from "react";
import styled from "styled-components";
import Book from "./book";
import Modal from "react-awesome-modal";
import Details from "./Details";
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const BookCollection = styled.div`
  margin: 10%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Content = (props) => {
  console.log("test", props);

  const onBookClick = (book) => {
    console.log("selected Book", book);
    props.updateSelectedBook(book);
  };
  useEffect(() => {
    if (!props.loading) window.scrollTo(0, localStorage.getItem("height"));
    localStorage.removeItem("height");
  }, [props]);

  const showErrors = () => {
    toast.error("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      localStorage.setItem("height", window.scrollY);
      console.log("you reached bottom");
      props?.fetchBooks(props.currentPageNo + 1);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <div>
        {props.books?.length > 0 && (
          <BookCollection>
            {props.books.map((b) => (
              <Book
                auther={b.authors}
                title={b.title}
                thumbnailUrl={b.thumbnailUrl}
                onClick={() => onBookClick(b)}
              />
            ))}
          </BookCollection>
        )}
        {props.error && showErrors()}
        <GridLoader
          color={"blue"}
          loading={props.loading}
          override={override}
          size={50}
        />
      </div>
      <div>
        <Modal
          visible={props.showPopup}
          width="600px"
          height="600px"
          effect="fadeInUp"
          onClickAway={() => props.clearSelection()}
        >
          <div>
            <Details
              book={props.selectedBook}
              onClose={() => props.clearSelection()}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Content;
