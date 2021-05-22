import React, { useEffect } from "react";

const App = (props) => {
  useEffect(() => {
    props.fetchBooks(1);
  }, [props]);
  return <div>this is samples</div>;
};

export default App;
