import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import "./style/style.scss";
import Home from "./components/home";


const App = () => {

  const [toggleSlide, setToggleSlide] = useState(false);

  const slideStatus = () => {
    setToggleSlide(!toggleSlide)
  }

  return (
    <article className="container">
      <Sidebar slideStatus={slideStatus} toggleSlide={toggleSlide} setToggleSlide={setToggleSlide} />
      <Home slideStatus={slideStatus} toggleSlide={toggleSlide} setToggleSlide={setToggleSlide}  />
    </article>
  );
};

export default App;
