import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
const Container = Styled.div`
height:100vh;
background-color:#f8f9fa;
display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper = Styled.div`

display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:300px;

`;
const Title = Styled.h1`
  font-size:45px;
  margin-bottom:10px;
`;

const LoginText = Styled.span`
  font-size: 25px;
  
  margin-bottom:20px;
  margin-top:10px;
`;

const InputContainer = Styled.div`
padding:10px 5px;
height:30px;
background-color:white;
border:solid gray 1px;
border-top:${(props) => props.name === "password" && "none"};
border-top-left-radius:${(props) => props.name === "username" && "5px"};
border-top-right-radius:${(props) => props.name === "username" && "5px"};
border-bottom-right-radius:${(props) => props.name === "password" && "5px"};
border-bottom-left-radius:${(props) => props.name === "password" && "5px"};

width:100%;

`;
const Input = Styled.input`
padding:5px;
font-size:18px;
width:90%;
height:90%;
border:none;
&:focus{
    padding:5px;
    width:100%;
    width:90%;
height:90%;
    border:none;
    outline:none;
}

`;
const CheckboxContainer = Styled.div`
width:100%;
display:flex;
padding:10px;
align-items:center;
justify-content:center;
margin-top:10px;
margin-bottom:10px;
`;

const Button = Styled.div`
padding:10px 5px;
height:30px;
width:100%;
border-radius:10px;
background-color:#0d6efd;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
color:white;
cursor:pointer;
&:hover{
    background-color:#0d6ee5;
}`;

const Warning = Styled.span``;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Admin</Title>
        <LoginText>Please Login</LoginText>
        <InputContainer name="username">
          <Input placeholder="Username" />
        </InputContainer>
        <InputContainer name="password">
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <CheckboxContainer>
          <Input
            style={{ width: "20px", marginRight: "10px" }}
            type="checkbox"
          ></Input>
          <label>Remember Me</label>
        </CheckboxContainer>
        <Button type="submit">Login</Button>
        <CheckboxContainer>
          <Warning>
            Don't have an account?{" "}
            <Link to="/register" style={{ all: "unset", cursor: "pointer" }}>
              Register
            </Link>
          </Warning>
        </CheckboxContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;