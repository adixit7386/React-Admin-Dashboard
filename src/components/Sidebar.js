import React from "react";
import Styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WidgetsIcon from "@mui/icons-material/Widgets";
import InsightsIcon from "@mui/icons-material/Insights";
import { toggleSidebar } from "../redux/sideRedux";
import { useDispatch } from "react-redux";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Mobile } from "../response";
const Container = Styled.div`

position:fixed;
width:250px;
z-index:3;
height:100vh;
background-color:#f8f9fa;

${Mobile({ width: "200px" })}

`;
// ${Mobile({ flex: "0.2" })}

const Wrapper = Styled.div`


height:content-fit;
display:flex;
align-items:center;
justify-content:top;
flex-direction:column;


`;

const ContentContainerMenu = Styled.div`

margin-left:43px;
height:60px;
display:flex;
align-items:center;
justify-content:stretch;
border-radius:5px;
${Mobile({ marginLeft: "39px" })}



`;
// ${Mobile({ flexDirection: "column", justifyContent: "center" })}

const Content = Styled.span`
font-size:18px;
${Mobile({ fontSize: "12px" })}
`;
const IconContainer = Styled.div`
margin:"10px"

`;
const Title = Styled.h1`
  font-size: 25px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 30px;
  ${Mobile({ marginLeft: "10px" })}
`;
const Sidebar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let route = location.pathname.split("/")[1];
  const dispatch = useDispatch();

  const handleClickSidebar = () => {
    dispatch(toggleSidebar());
  };
  const IconStyle = {
    height: "25px",
    width: "25px",
    marginLeft: "10px",
    marginRight: "10px",
  };
  const IconStyleMenu = { height: "35px", width: "35px", cursor: "pointer" };
  const TableContainer = Styled.table`
width:100%;

align-items:center;
justify-content:center;
${Mobile({ width: "90%" })}
`;
  const TableRow = Styled.tr`
flex:1;
background-color:${(props) => props.name === props.page && "lightgray"};
border-radius:5px;
display:flex;
padding:5px;
align-items:center;
cursor:pointer;
height:40px;
margin:10px;
transition: all 0.5s ease;
&:hover{
  background-color:lightgray;
  
}`;

  const TableData = Styled.td`
flex:${(props) => (props.names === "route" ? "3" : "2")};
display:flex;
align-items:${(props) => (props.names === "route" ? "left" : "center")};
justify-content:center;
flex-direction:column;`;
  const handleClick = (e) => {
    navigate("/" + e);
  };

  return (
    <Container>
      <ContentContainerMenu>
        <MenuRoundedIcon style={IconStyleMenu} onClick={handleClickSidebar} />
        <Title>Admin</Title>
      </ContentContainerMenu>
      <Wrapper>
        <TableContainer>
          <TableRow
            name={"home"}
            page={route}
            onClick={() => handleClick("home")}
          >
            <TableData names="icon">
              <IconContainer>
                <HomeIcon style={IconStyle} />
              </IconContainer>
            </TableData>
            <TableData names="route">
              <Content>Home</Content>
            </TableData>
          </TableRow>

          <TableRow
            name="users"
            page={route}
            onClick={() => handleClick("users")}
          >
            <TableData names="icon">
              <IconContainer>
                <PeopleIcon style={IconStyle} />
              </IconContainer>
            </TableData>
            <TableData names="route">
              <Content>Users</Content>
            </TableData>
          </TableRow>

          <TableRow
            name="products"
            page={route}
            onClick={() => handleClick("products")}
          >
            <TableData names="icon">
              <IconContainer>
                <WidgetsIcon style={IconStyle} />
              </IconContainer>
            </TableData>
            <TableData names="route">
              <Content>Products</Content>
            </TableData>
          </TableRow>
          <TableRow
            name="analytics"
            page={route}
            onClick={() => handleClick("analytics")}
          >
            <TableData names="icon">
              <IconContainer>
                <InsightsIcon style={IconStyle} />
              </IconContainer>
            </TableData>
            <TableData names="route">
              <Content>Analytics</Content>
            </TableData>
          </TableRow>
        </TableContainer>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
