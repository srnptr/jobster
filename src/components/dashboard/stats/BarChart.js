import React from "react";
import {
  BarChart as BarChartCmp,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <BarChartCmp data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} domain={[0, "dataMax + 1"]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#3b82f6" barSize={50} />
      </BarChartCmp>
    </ResponsiveContainer>
  );
};

export default BarChart;
