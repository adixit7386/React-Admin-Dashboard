import React from "react";
import Styled from "styled-components";
import { Mobile } from "../response";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Container = Styled.div`
flex:1;
margin-top:20px;
margin-bottom:20px;
margin-right:10px;
margin-left:10px;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
border-radius:5px;
box-shadow: 0px 0px 10px lightgray;
${Mobile({ width: "95%" })};
transition:box-shadow 0.5s ease;
&:hover{
  box-shadow: 0px 0px 20px lightgray;
}

`;

const data = [
  {
    month: "Jan",
    "Active Users": 4000,
  },
  {
    month: "Feb",
    "Active Users": 3000,
  },
  {
    month: "Mar",
    "Active Users": 2000,
  },
  {
    month: "Apr",
    "Active Users": 2780,
  },
  {
    month: "May",
    "Active Users": 1890,
  },
  {
    month: "Jun",
    "Active Users": 2390,
  },
  {
    month: "Jul",
    "Active Users": 3490,
  },
  {
    month: "Aug",
    "Active Users": 2000,
  },
  {
    month: "Sep",
    "Active Users": 2500,
  },
  {
    month: "Oct",
    "Active Users": 2800,
  },
  {
    month: "Nov",
    "Active Users": 1999,
  },
  {
    month: "Dec",
    "Active Users": 3490,
  },
];

const Heading = Styled.h1`
font-size:24px;
`;

const Charts = () => {
  return (
    <Container>
      <Heading>Users Analytics</Heading>
      <ResponsiveContainer width="95%" style aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active Users" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Charts;
