import React from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebars from "../components/Sidebar";
import FeaturedInfo from "../components/FeaturedInfo";
import Charts from "../components/Charts";
const Container = Styled.div``;

const Wrapper = Styled.div`
display:flex;

`;

const Content = Styled.div`
flex:4;
flex:4;
margin-top:60px;
display:flex;
align-items:center;
justify-content:top;
flex-direction:column;
padding:20px;
`;
const Analytics = () => {
  return (
    <Container>
      <Navbar />
      <Sidebars />
      <Wrapper>
        <Content>
          <FeaturedInfo />
          <Charts />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Analytics;
