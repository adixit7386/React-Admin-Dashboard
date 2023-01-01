import React from "react";
import Styled from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Mobile } from "../response";
const DataContainer = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
width:100%;
${Mobile({ flexDirection: "column", width: "95%" })};
`;

const RevenueContainer = Styled.div`
flex:1;
height:100%;
margin-right:${(props) => props.name !== "last" && "20px"};
padding:10px;

border-radius:5px;
box-shadow: 0px 0px 10px lightgray;
transition:box-shadow 0.5s ease;
&:hover{
  box-shadow: 0px 0px 20px lightgray;
}
${Mobile({ margin: "10px 20px", width: "100%" })};
`;

const Title = Styled.span`
font-size:18px;`;
const AmountContainer = Styled.div`
display:flex;
align-items:center;
justify-content:flex-start;

`;
const Amount = Styled.h1`
font-size:38px;`;
const Desc = Styled.p`
font-size:18px;
color:lightgray;
margin:0 auto;`;
const FeaturedInfo = () => {
  const IconStyleUpward = {
    height: "30px",
    width: "30px",
    color: "green",
    marginLeft: "30px",
  };
  const IconStyleDownward = {
    height: "30px",
    width: "30px",
    color: "red",
    marginLeft: "30px",
  };
  return (
    <DataContainer>
      <RevenueContainer>
        <Title>Revenue</Title>
        <AmountContainer>
          <Amount>₹ 238</Amount>
          <ArrowUpwardIcon style={IconStyleUpward} />
        </AmountContainer>
        <Desc>Compared to last month</Desc>
      </RevenueContainer>
      <RevenueContainer>
        <Title>Sales</Title>
        <AmountContainer>
          <Amount>₹ 2348</Amount>
          <ArrowDownwardIcon style={IconStyleDownward} />
        </AmountContainer>
        <Desc>Compared to last month</Desc>
      </RevenueContainer>
      <RevenueContainer name={"last"}>
        <Title>Cost</Title>
        <AmountContainer>
          <Amount>₹ 538</Amount>
          <ArrowDownwardIcon style={IconStyleDownward} />
        </AmountContainer>
        <Desc>Compared to last month</Desc>
      </RevenueContainer>
    </DataContainer>
  );
};

export default FeaturedInfo;
