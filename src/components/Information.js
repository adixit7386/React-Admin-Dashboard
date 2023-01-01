import React from "react";
import Styled from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Mobile } from "../response";
const Container = Styled.div`
flex:1;
display:flex;
align-items:top;
justify-content:center;
width:100%;
${Mobile({ flexDirection: "column" })};


`;
const UsersContainer = Styled.div`
width:100%;
flex:1;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
border-radius:5px;
box-shadow:0px 0px 10px lightgray;
margin-right:10px;
transition:box-shadow 0.5s ease;
&:hover{
  box-shadow: 0px 0px 20px lightgray;
}
${Mobile({ flex: "2", margin: "10px auto" })}
`;
const TransactionsContainer = Styled.div`
flex:2;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
border-radius:5px;
height:content-fit;
box-shadow:0px 0px 10px lightgray;
transition:box-shadow 0.5s ease;
&:hover{
  box-shadow: 0px 0px 20px lightgray;
}
`;
const Header = Styled.h1`
font-size:24px;`;
const TableContainer = Styled.table`
width:100%;

align-items:center;
justify-content:center;
${Mobile({ width: "90%" })}
`;
const TableRow = Styled.tr`
flex:1;
display:flex;
padding:5px;
align-items:center;`;
const TableData = Styled.td`
flex:${(props) => (props.name === "user" ? "3" : "2")};
display:flex;
align-items:${(props) => (props.name === "user" ? "left" : "center")};
justify-content:center;
flex-direction:column;`;
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
font-weight:200;
color:gray;`;

const IconContainer = Styled.div`
height:40px;
width:40px;
display:flex;
align-items:center;
justify-content:center;
border-radius:10px;
cursor:pointer;
background-color:lightgray;`;
const Heading = Styled.span`
font-size:18px;`;

const Information = () => {
  const IconStyle = { width: "30px", height: "30px" };
  return (
    <Container>
      <UsersContainer>
        <Header>New Join Members</Header>
        <TableContainer>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>
            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <IconContainer>
                <RemoveRedEyeIcon style={IconStyle} />
              </IconContainer>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>
            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <IconContainer>
                <RemoveRedEyeIcon style={IconStyle} />
              </IconContainer>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>
            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <IconContainer>
                <RemoveRedEyeIcon style={IconStyle} />
              </IconContainer>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>
            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <IconContainer>
                <RemoveRedEyeIcon style={IconStyle} />
              </IconContainer>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>
            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <IconContainer>
                <RemoveRedEyeIcon style={IconStyle} />
              </IconContainer>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>
            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <IconContainer>
                <RemoveRedEyeIcon style={IconStyle} />
              </IconContainer>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>
            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <IconContainer>
                <RemoveRedEyeIcon style={IconStyle} />
              </IconContainer>
            </TableData>
          </TableRow>
        </TableContainer>
      </UsersContainer>
      <TransactionsContainer>
        <Header>Latest Transactions</Header>
        <TableContainer>
          <TableRow>
            <TableData name="image">
              <Heading>Customer</Heading>
            </TableData>
            <TableData name="user">
              <Heading>Name</Heading>
            </TableData>

            <TableData name="view">
              <Heading>Date</Heading>
            </TableData>
            <TableData name="view">
              <Heading>Amount</Heading>
            </TableData>
            <TableData name="view">
              <Heading>Status</Heading>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>

            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <Data>15 July 2022</Data>
            </TableData>
            <TableData name="view">
              <Data>₹456</Data>
            </TableData>
            <TableData name="view">
              <Data>Pending</Data>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>

            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <Data>15 July 2022</Data>
            </TableData>
            <TableData name="view">
              <Data>₹456</Data>
            </TableData>
            <TableData name="view">
              <Data>Pending</Data>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>

            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <Data>15 July 2022</Data>
            </TableData>
            <TableData name="view">
              <Data>₹456</Data>
            </TableData>
            <TableData name="view">
              <Data>Pending</Data>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>

            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <Data>15 July 2022</Data>
            </TableData>
            <TableData name="view">
              <Data>₹456</Data>
            </TableData>
            <TableData name="view">
              <Data>Pending</Data>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>

            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <Data>15 July 2022</Data>
            </TableData>
            <TableData name="view">
              <Data>₹456</Data>
            </TableData>
            <TableData name="view">
              <Data>Pending</Data>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData name="image">
              <Img
                src={
                  "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                }
              />
            </TableData>

            <TableData name="user">
              <Username>User Name</Username>
              <Desc>Software Engineer</Desc>
            </TableData>

            <TableData name="view">
              <Data>15 July 2022</Data>
            </TableData>
            <TableData name="view">
              <Data>₹456</Data>
            </TableData>
            <TableData name="view">
              <Data>Pending</Data>
            </TableData>
          </TableRow>
        </TableContainer>
      </TransactionsContainer>
    </Container>
  );
};

export default Information;
