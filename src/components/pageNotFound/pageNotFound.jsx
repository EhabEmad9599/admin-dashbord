import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const Navigate = useNavigate();
  return (
    <section className="not-found ">
      <h1>OOPS!</h1>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for isn't here</p>
      <button
        onClick={() => Navigate("/")}
        type="button"
        className="btn btn-outline-secondary"
      >
        Back To Home
      </button>
    </section>
  );
};
export default PageNotFound;
