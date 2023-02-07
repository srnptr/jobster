import React from "react";
import Wrapper from "../../../assets/styled-wrappers/StatItem";

const StatItem = ({count, bcg, color, icon, title}) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
		<span className="icon">{icon}</span>
      </header>
	  <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default StatItem;
