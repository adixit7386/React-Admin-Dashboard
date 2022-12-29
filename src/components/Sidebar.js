import React from "react";
import Styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WidgetsIcon from "@mui/icons-material/Widgets";
import InsightsIcon from "@mui/icons-material/Insights";

import { Mobile } from "../response";
const Container = Styled.div`
height:92vh;
background-color:#f8f9fa;
padding:5px 16px;
${Mobile({ width: "60px" })}
`;

const Wrapper = Styled.div`
height:content-fit;

display:flex;
align-items:center;
justify-content:top;
flex-direction:column;


`;

const ContentContainer = Styled.div`

width:100%;
margin:5px;
height:"50px";
display:flex;
align-items:center;
justify-content:stretch;

border-radius:5px;
padding:10px 16px;
background-color:${(props) => props.page === props.name && "lightgray"};
cursor:pointer;
&:hover{
    background-color:lightgray;
}
${Mobile({ flexDirection: "column", justifyContent: "center" })}
`;

const Content = Styled.span`
font-size:18px;
${Mobile({ fontSize: "12px" })}
`;
const IconContainer = Styled.div`
margin:"10px"

`;
const Sidebar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let route = location.pathname.split("/")[1];

  const IconStyle = {
    height: "25px",
    width: "25px",
    marginLeft: "10px",
    marginRight: "10px",
  };
  const handleClick = (e) => {
    navigate("/" + e);
  };

  return (
    <Container>
      <Wrapper>
        <ContentContainer
          name={"home"}
          page={route}
          onClick={() => handleClick("home")}
        >
          <IconContainer>
            <HomeIcon style={IconStyle} />
          </IconContainer>
          <Content>Home</Content>
        </ContentContainer>
        <ContentContainer
          name="users"
          page={route}
          onClick={() => handleClick("users")}
        >
          <IconContainer>
            <PeopleIcon style={IconStyle} />
          </IconContainer>
          <Content>Users</Content>
        </ContentContainer>
        <ContentContainer
          name="products"
          page={route}
          onClick={() => handleClick("products")}
        >
          <IconContainer>
            <WidgetsIcon style={IconStyle} />
          </IconContainer>
          <Content>Products</Content>
        </ContentContainer>
        <ContentContainer
          name="analytics"
          page={route}
          onClick={() => handleClick("analytics")}
        >
          <IconContainer>
            <InsightsIcon style={IconStyle} />
          </IconContainer>
          <Content>Analytics</Content>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
