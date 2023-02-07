import React from "react";
import Wrapper from "../assets/styled-wrappers/LandingPage";
import { Logo } from "../layouts";
import mainImg from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <img
          className="img main-img"
          src={mainImg}
          alt="illustration of two people working together"
        />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
