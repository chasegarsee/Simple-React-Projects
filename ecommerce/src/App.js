import React from "react";
import Filter from "./components/Shelf/Filter";
import Shelf from "./components/Shelf";
import FloatCart from "./components/FloatCart";

import "./App.css";

function App() {
  return (
    // {/* <div className="App">
    //   <h1>eCommerce</h1>
    // </div> */}

    <React.Fragment>
      <main>
        <Filter />
        <Shelf />
      </main>
      <FloatCart />
    </React.Fragment>
  );
}

export default App;
