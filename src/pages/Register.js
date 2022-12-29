import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { Mobile } from "../response";
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
width:700px;

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

const InputWrapper = Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
${Mobile({ flexWrap: "" })}
`;
const InputContainer = Styled.div`
padding:10px 5px;
height:30px;
background-color:white;
border:solid gray 1px;
border-radius:5px;
margin:6px 12px;

width:300px;

`;
const Input = Styled.input`


font-size:18px;
width:90%;
height:90%;
border:none;
&:focus{
    padding:5px;
    width:100%;
    border:none;
    outline:none;
    font-size:18px;
width:90%;
height:90%;
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
margin-top:20px;
margin-bottom:10px;
padding:10px 5px;
height:30px;
width:50%;
border-radius:10px;
background-color:#0d6efd;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
color:white;
&:hover{
    background-color:#0d6ee5;
}`;

const Warning = Styled.span``;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Admin</Title>
        <LoginText>Please Register Here</LoginText>
        <InputWrapper>
          <InputContainer name="firstname">
            <Input placeholder="First Name" />
          </InputContainer>
          <InputContainer name="lastname">
            <Input placeholder="Last Name" />
          </InputContainer>
          <InputContainer name="username">
            <Input placeholder="Username" />
          </InputContainer>
          <InputContainer name="email">
            <Input type="email" placeholder="E-mail" />
          </InputContainer>
          <InputContainer name="password">
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <InputContainer name="repeatpassword">
            <Input type="password" placeholder="Repeat Password" />
          </InputContainer>
        </InputWrapper>
        <Button type="submit">Register</Button>
        <CheckboxContainer>
          <Warning>
            already have an account?{" "}
            <Link to="/login" style={{ all: "unset", cursor: "pointer" }}>
              Login
            </Link>{" "}
          </Warning>
        </CheckboxContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
