import React from "react";
import {
  AreaChart as AreaChartCmp,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaChart = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <AreaChartCmp data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} domain={[0, "dataMax + 1"]}/>
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#1e3a8a" fill="#3b82f6" />
      </AreaChartCmp>
    </ResponsiveContainer>
  );
};

export default AreaChart;
