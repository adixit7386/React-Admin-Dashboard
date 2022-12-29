import React from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebars from "../components/Sidebar";
import { useSelector } from "react-redux";
const Container = Styled.div``;

const Wrapper = Styled.div`
display:flex;
`;

const Sidebar = Styled.div`
flex:1;`;
const Content = Styled.div`
flex:4;
`;
const Products = () => {
  const toggle = useSelector((state) => state.sidebar);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        {toggle && (
          <Sidebar>
            <Sidebars />
          </Sidebar>
        )}
        <Content>content</Content>
      </Wrapper>
    </Container>
  );
};

export default Products;
