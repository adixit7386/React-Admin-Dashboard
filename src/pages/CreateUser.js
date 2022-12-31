import React from "react";
import Styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebars from "../components/Sidebar";
import { Mobile } from "../response";
import UploadIcon from "@mui/icons-material/Upload";
const Container = Styled.div``;

const Wrapper = Styled.div`
display:flex;
width:100%;
`;

const Content = Styled.div`

flex:4;
display:flex;
margin-top:70px;
align-items:center;
justify-content:center;
padding:5px 12px;
flex-direction:column;
`;

const Img = Styled.img`

height:50px;
width:50px;
border-radius:50%;`;

const Details = Styled.div`
flex:1;
width:100%;
display:flex;
align-items:top;
justify-content:center;`;

const Header = Styled.h1`
flex:1;
font-size:24px;`;
const EditContainer = Styled.div`
flex:3;
border-radius:5px;
padding:27px 32px;
box-shadow:0px 0px 10px lightgray;
display:flex;
align-items:top;
justify-content:center;
${Mobile({ flexDirection: "column" })};
`;
const FormContainer = Styled.div`
flex:1;
padding:10px 30px;

`;
const ImageContainer = Styled.div`
display:flex;
align-items:top;
justify-content:center;
flex-direction:column;
flex:1;`;
const Input = Styled.input`
border:none;
border-bottom:solid 2px lightgray;
height:40px;
width:100%;


&:focus{
  outline:none;
  height:40px;
  border-bottom:solid 2px gray;

}`;
const Label = Styled.h1`
font-size:18px;
color:black;
font-weight:400;
`;
const ProfileImageContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:20px;
`;

const Button = Styled.button`
width:50%;
height:35px;
border-radius:5px;
border:none;
background-color:#205295;
color:white;
font-size:18px;
cursor:pointer;
&:hover{
  background-color:#2C74B3;
}`;
const CreateUsers = () => {
  const IconUpload = { height: "25px", width: "25px" };
  return (
    <Container>
      <Navbar />
      {/* {toggle && <Sidebars />} */}
      <Sidebars />
      <Wrapper>
        <Content>
          <Header>Create New User</Header>
          <Details>
            <EditContainer>
              <FormContainer>
                <Header>Edit Details</Header>
                <Label>Username</Label>

                <Input placeholder="abcd123" />

                <Label>Full Name</Label>

                <Input placeholder="abcd xyzw" />

                <Label>Email</Label>

                <Input placeholder="abc@xyz.com" />
                <Label>Password</Label>

                <Input type="password" placeholder="minimum 8 chars" />
                <Label>Repeat Password</Label>

                <Input type="password" placeholder="re-enter password" />

                <Label>Phone Number</Label>

                <Input placeholder="+91 234*****23" />
                <Label>Address</Label>

                <Input placeholder="Chennai India" />
              </FormContainer>
              <ImageContainer>
                <ProfileImageContainer>
                  <Img
                    src={
                      "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                    }
                  />
                </ProfileImageContainer>
                <ProfileImageContainer>
                  <UploadIcon style={IconUpload} />
                </ProfileImageContainer>
                <ProfileImageContainer>
                  <Button>Create</Button>
                </ProfileImageContainer>
              </ImageContainer>
            </EditContainer>
          </Details>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CreateUsers;
