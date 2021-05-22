import React, { useEffect } from "react";

const App = (props) => {
  useEffect(() => {
    props.fetchBooks(1);
  }, [props]);
  return <div>alex</div>;
};

export default App;
