import React from "react";
import "../css/Chart.css";
import { ticks } from "../utils/consts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  LineChart,
  Line,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

function Chart() {
  const chartData = useSelector(
    (state: RootState) => state.itemSlice.items[0]?.sales
  );
  return (
    <div id="chart-container">
      {/* Render chart after get data from server side*/}
      {chartData && (
        <>
          <div id="chart-title">Retail Sales</div>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart
              id="line-chart"
              width={1000}
              height={400}
              data={chartData}
              margin={{ top: 40, right: 40, bottom: 0, left: 40 }}
            >
              <Line
                type="monotone"
                dataKey="wholesaleSales"
                stroke="#9BA6BF"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="retailSales"
                stroke="#40A5F6"
                strokeWidth={3}
                dot={false}
              />
              <YAxis
                domain={([dataMin, dataMax]) => {
                  const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax));
                  return [-absMax * 3, absMax * 5];
                }}
                hide
              />
              <XAxis dataKey={"weekEnding"} hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          <div className="divider" />
          <div id="chart-ticks">
            {ticks.map((tick) => (
              <div key={`chart-tick-${tick}`}>{tick}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Chart;
