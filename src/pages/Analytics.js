import React from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebars from "../components/Sidebar";
import { useSelector } from "react-redux";
const Container = Styled.div``;

const Wrapper = Styled.div`
display:flex;
`;

const Content = Styled.div`
flex:4;
`;
const Analytics = () => {
  const toggle = useSelector((state) => state.sidebar);
  return (
    <Container>
      <Navbar />
      {toggle && <Sidebars />}
      <Wrapper>
        <Content>content</Content>
      </Wrapper>
    </Container>
  );
};

export default Analytics;
