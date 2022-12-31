import React from "react";
import Navbar from "../components/Navbar";
import Sidebars from "../components/Sidebar";
import Styled from "styled-components";

import FeaturedInfo from "../components/FeaturedInfo";
import Charts from "../components/Charts";
import Information from "../components/Information";
const Container = Styled.div`
width:100%;`;

const Wrapper = Styled.div`
display:flex;


`;

const Content = Styled.div`
flex:4;
margin-top:60px;
display:flex;
align-items:center;
justify-content:top;
flex-direction:column;
padding:20px;

`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Sidebars />

      <Wrapper>
        <Content>
          <FeaturedInfo />
          <Charts />
          <Information />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Home;
