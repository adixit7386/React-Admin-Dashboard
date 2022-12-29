import React, { useState } from "react";
import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: lightgray;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 25px;
  margin: 0px;
`;

const AccountContainer = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 5px;
  position: absolute;
  background-color: lightgray;
  top: 55px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;
`;

const Top = styled.div`
  height: 38%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Middle = styled.div`
  width: 100%;
  height: 26%;

  align-items: center;
  justify-content: center;
  display: flex;
`;
const Bottom = styled.div`
  width: 100%;
  height: 38%;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Name = styled.span`
  font-size: 24px;
`;
const LogoutText = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const IconStyle = { height: "35px", width: "35px", cursor: "pointer" };
  console.log(clicked);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Admin</Title>
        </Left>

        <Right>
          <PersonOutlinedIcon
            onClick={() => {
              setClicked((data) => !data);
            }}
            style={IconStyle}
          />
        </Right>
        {clicked && (
          <AccountContainer>
            <Top>
              <PersonOutlinedIcon
                onClick={() => {
                  setClicked((data) => !data);
                }}
                style={IconStyle}
              />
            </Top>
            <Middle>
              <Name>UserName</Name>
            </Middle>
            <Bottom>
              <LogoutText>Logout</LogoutText>
              <LogoutOutlinedIcon style={IconStyle} />
            </Bottom>
          </AccountContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
