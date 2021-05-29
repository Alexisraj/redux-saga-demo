import React, { useEffect } from "react";
import styled from "styled-components";
import Book from "./book";
import "./content.css";
import GridLoader from "react-spinners/GridLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const BookCollection = styled.div`
  margin: 10%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;
const Loader = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10001;
`;
const Loading = styled.div`
  width: 165px;
  top: 50%;
  left: 50%;
  position: fixed;
`;
const Content = (props) => {
  let history = useHistory();

  const onBookClick = (bookId, type) => {
    if (type === "remove") props.removeItem(bookId);
    else props.addToCart(bookId);
  };
  useEffect(() => {
    if (!props.loading) {
      if (localStorage.getItem("height")) {
        showSuccess();
        window.scrollTo(0, localStorage.getItem("height"));
        localStorage.removeItem("height");
      }
    }
  }, [props]);

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  };
  const showSuccess = () => {
    toast.success("New Products Loaded!", toastOptions);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      localStorage.setItem("height", window.scrollY);

      props?.fetchBooks(props.currentPageNo + 1);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <ToastContainer />
      <div className="Counter">
        <p>{props.books?.length ?? 0}</p>
      </div>
      <div className="Cart">
        <div style={{ margin: "0 auto", display: "table" }}>
          <img
            className="Cartimg"
            src={"./cart.svg"}
            alt="a"
            onClick={() => history.push("/cart")}
          ></img>
          {props.cart?.length > 0 && (
            <p className="CartSize">{props.cart?.length}</p>
          )}
        </div>
      </div>
      <div style={{ minHeight: "700px" }}>
        {props.books?.length > 0 && (
          <BookCollection>
            {props.books.map((b) => (
              <Book
                auther={b.authors}
                cart={props.cart}
                id={b.id}
                title={b.title}
                thumbnailUrl={b.thumbnailUrl}
                onClick={onBookClick}
              />
            ))}
          </BookCollection>
        )}
        {props.loading && (
          <Loader>
            <Loading>
              <GridLoader color={"white"} loading={props.loading} size={50} />
            </Loading>
          </Loader>
        )}
      </div>
    </>
  );
};

export default Content;
