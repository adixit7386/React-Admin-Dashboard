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

const UserContainer = Styled.div`
flex:2;
border-radius:5px;
box-shadow:0px 0px 10px lightgray;
margin-right:10px;
padding:5px 12px;
${Mobile({ marginRight: "0px", marginBottom: "20px" })};
`;
const TableData = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const NameContainer = Styled.div`
flex:2;
display:flex;
align-items:left;
justify-content:between;
flex-direction:column;
margin-top:20px;
margin-bottom:20px;
`;
const ImgContainer = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`;
const Img = Styled.img`

height:50px;
width:50px;
border-radius:50%;`;
const Username = Styled.span`

font-weight:600;`;
const Desc = Styled.span`
font-weight:300;
color:gray;`;
const Data = Styled.span`
margin-left:12%;
font-weight:600;
margin-top:auto;
margin-bottom:auto;`;
const Detail = Styled.span`
font-weight:200;
color:gray;`;
const DetailContainer = Styled.div`
padding-left:12%;
margin-top:20px;
margin-bottom:20px;
`;
const Details = Styled.div`
flex:1;
width:100%;
display:flex;
align-items:top;
justify-content:center;
${Mobile({ flexDirection: "column" })};`;

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
${Mobile({ flexDirection: "column" })};`;
const FormContainer = Styled.div`
flex:1;
padding :10px 30px;`;
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
cursor:pointer;
font-size:18px;
&:hover{
  background-color:#2C74B3;
}`;
const EditProduct = () => {
  const IconUpload = { height: "25px", width: "25px" };
  return (
    <Container>
      <Navbar />
      <Sidebars />
      <Wrapper>
        <Content>
          <Header>Edit Product Details</Header>
          <Details>
            <UserContainer>
              <TableData name="image">
                <ImgContainer>
                  <Img
                    src={
                      "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                    }
                  />
                </ImgContainer>
                <NameContainer>
                  <Username>ProductName</Username>
                  <Desc>Description</Desc>
                </NameContainer>
              </TableData>
              <DetailContainer>
                <Detail>Product Name</Detail>
                <Data>abcxyz234</Data>
              </DetailContainer>
              <DetailContainer>
                <Detail>Description</Detail>
                <Data>This is the Description</Data>
              </DetailContainer>
              <DetailContainer>
                <Detail>Price</Detail>
                <Data>234</Data>
              </DetailContainer>
              <DetailContainer>
                <Detail>inStock</Detail>
                <Data>234</Data>
              </DetailContainer>
            </UserContainer>
            <EditContainer>
              <FormContainer>
                <Header>Edit Details</Header>
                <Label>Product Name</Label>

                <Input placeholder="abcd123" />

                <Label>Description</Label>

                <Input placeholder="abcd xyzw" />

                <Label>Price</Label>

                <Input placeholder="2348" />
                <Label>InStock</Label>

                <Input placeholder="true/false" />
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
                  <Button>Update</Button>
                </ProfileImageContainer>
              </ImageContainer>
            </EditContainer>
          </Details>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default EditProduct;
