import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import styled from "styled-components";
import React from "react";
import CustomTooltip from "./CustomToolTip";

const Div = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 30px;
  background-color: #f7f8f9;
  padding-top: 100px;
  overflow-y: hidden;
`;

function ChartLine(props) {
  return (
    <Div>
      <ResponsiveContainer width="99%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={props.data}
          syncId="anyId"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis width={40} />
          <Tooltip
            position={{ x: 60, y: -90 }}
            content={
              <CustomTooltip
                default={props.data[0]}
                name={props.name}
                unit={props.unit}
              />
            }
            wrapperStyle={{ visibility: "visible" }}
            default={props.data[0]}
          />
          <Legend />
          <Bar
            type="monotone"
            dataKey={props.dataName}
            name={props.name}
            fill="#8884d8"
          />
        </BarChart>
      </ResponsiveContainer>
    </Div>
  );
}

export default ChartLine;
