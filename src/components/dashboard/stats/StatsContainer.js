import React from "react";
import { useSelector } from "react-redux";
import { StatItem } from "../../";
import Wrapper from "../../../assets/styled-wrappers/StatsContainer";
import defaultStats from "../../../utils/defaultStats";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);
  const counts = Object.values(stats);

  return (
    <Wrapper>
      {defaultStats.map((stat, index) => (
        <StatItem key={index} {...stat} count={counts[index] || 0} />
      ))}
    </Wrapper>
  );
};

export default StatsContainer;
