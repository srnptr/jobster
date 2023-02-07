import React from "react";
import Wrapper from "../assets/styled-wrappers/ErrorPage";
import notFoundImg from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFoundImg} alt="Page not found." />
        <h3>Ooh! Page not found!</h3>
        <p>We can't seem to find the page you're looking for.</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
