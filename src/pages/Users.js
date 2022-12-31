import React from "react";
import Navbar from "../components/Navbar";
import Sidebars from "../components/Sidebar";
import Styled from "styled-components";
import { Mobile } from "../response";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const Container = Styled.div`
`;

const Wrapper = Styled.div`
display:flex;


`;

const Content = Styled.div`
flex:4;
padding:7px 15px;
margin-top:60px;
`;
const UsersContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;`;
const Header = Styled.h1`
font-size:24px;`;
const TableContainer = Styled.table`
width:100%;
border-radius:5px;
box-shadow:0px 0px 10px lightgray;

align-items:center;
justify-content:center;
${Mobile({ width: "80%" })}
`;
const TableRow = Styled.tr`
flex:1;
display:flex;
padding:5px;
height:${(props) => props.name === "header" && "60px"};
cursor:${(props) => props.name !== "header" && "pointer"};
align-items:center;
border-radius:5px;
margin:5px;
${Mobile({ flex: "0.8" })};

box-shadow:0px 0px 2px lightgray;
transition:all 0.5s ease;
&:hover{
  background-color:${(props) => props.name !== "header" && "#f8f9fa"};
}
`;
const TableData = Styled.td`
flex:${(props) => (props.name === "user" ? "3" : "2")};
display:flex;
align-items:${(props) => (props.name === "user" ? "left" : "center")};
justify-content:center;
flex-direction:${(props) => (props.name === "user" ? "column" : "row")};`;
const Img = Styled.img`
height:50px;
width:50px;
border-radius:50%;`;

const Username = Styled.span`
font-weight:600;`;

const Data = Styled.span`
font-weight:200;
color:gray;`;

const Heading = Styled.span`
font-size:18px;`;
const NewUserContainer = Styled.div`
flex:1;
width:100%;
padding:10px;
display:flex;
align-items:center;
justify-content:flex-end;`;
const Button = Styled.button`
width:20%;
height:35px;
border-radius:5px;
cursor:pointer;
border:none;
background-color:#205295;
color:white;
font-size:18px;
&:hover{
  background-color:#2C74B3;
}`;
const Users = () => {
  const navigate = useNavigate("");
  function handleClick() {
    navigate("/users/new");
  }
  const EditStyle = {
    height: "25px",
    width: "25px",
    color: "blue",
    marginRight: "10px",
    cursor: "pointer",
  };
  const DeleteStyle = {
    height: "25px",
    width: "25px",
    color: "red",
    cursor: "pointer",
  };
  const data = [
    {
      id: "1",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "2",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "3",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "4",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "5",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "6",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "7",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "8",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "9",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
    {
      id: "10",
      image:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
      name: "abc",
      email: "abc@xyz.com",

      amount: "120",
    },
  ];
  return (
    <Container>
      <Navbar />

      <Sidebars />
      <Wrapper>
        <Content>
          <UsersContainer>
            <Header>Users</Header>
            <NewUserContainer>
              <Button type="submit" onClick={handleClick}>
                Create
              </Button>
            </NewUserContainer>
            <TableContainer>
              <TableRow name={"header"}>
                <TableData name="id">
                  <Heading>Id</Heading>
                </TableData>
                <TableData name="image">
                  <Heading>Customer</Heading>
                </TableData>
                <TableData name="user">
                  <Heading>Name</Heading>
                </TableData>
                <TableData name="email">
                  <Heading>Email</Heading>
                </TableData>

                <TableData name="amounts">
                  <Heading>amounts</Heading>
                </TableData>
                <TableData name="action">
                  <Heading>Action</Heading>
                </TableData>
              </TableRow>

              {data.map((item) => (
                <TableRow>
                  <TableData name="id">
                    <Username>{item.id}</Username>
                  </TableData>
                  <TableData name="customer">
                    <Img src={item.image} />
                  </TableData>

                  <TableData name="user">
                    <Username>{item.name}</Username>
                  </TableData>

                  <TableData name="email">
                    <Data>{item.email}</Data>
                  </TableData>

                  <TableData name="amounts">
                    <Data>{item.amount}</Data>
                  </TableData>
                  <TableData name="actions">
                    <EditIcon style={EditStyle} />
                    <DeleteIcon style={DeleteStyle} />
                  </TableData>
                </TableRow>
              ))}
            </TableContainer>
          </UsersContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Users;
