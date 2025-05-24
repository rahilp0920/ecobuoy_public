import { LineChart, Line } from "recharts";

/**
 * MiniTrendline: Renders a small sparkline chart for use in metric cards.
 * @param {Array<number>} data - Array of numbers representing the trend.
 * @param {string} color - Color of the trend line.
 */
const MiniTrendline = ({ data, color = "blue" }) => (
  <LineChart width={80} height={24} data={data.map((v, i) => ({ v, i }))}>
    <Line type="monotone" dataKey="v" stroke={color} dot={false} strokeWidth={2} />
  </LineChart>
);

export default MiniTrendline;
