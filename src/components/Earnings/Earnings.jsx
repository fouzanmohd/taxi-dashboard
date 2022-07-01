import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { Section } from "./earningsStyling";

const Earnings = () => {
  const data = [
    { data: 4500 },
    { data: 5000 },
    { data: 4700 },
    { data: 4200 },
    { data: 5200 },
    { data: 5600 },
    { data: 5900 },
    { data: 6200 },
    { data: 6400 },
    { data: 6600 },
    { data: 6800 },
    { data: 5200 },
    { data: 7600 },
    { data: 6800 },
    { data: 7900 },
    { data: 6200 },
    { data: 8500 },
    { data: 7800 },
    { data: 9000 },
  ];
  return (
    <Section>
      <div className="top">
        <div className="info">
          <h4>This Month Earnings</h4>
          <h1>$862.50</h1>
          <div className="growth">
            <span>+2.54%</span>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Tooltip cursor={false} />
            <Area
              animationBegin={800}
              animationDuration={2000}
              type="monotone"
              dataKey="data"
              stroke="#ffc107"
              fill="#8068233e"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
};

export default Earnings;
