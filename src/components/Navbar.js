import React, { useState } from "react";
import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch } from "react-redux";
import { Mobile } from "../response";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { toggleSidebar } from "../redux/sideRedux";
const Container = styled.div`
  height: 8vh;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 26px;
  margin-right: 26px;
  ${Mobile({ marginLeft: "16px" })}
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
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
`;

const AccountContainer = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 5px;
  position: absolute;
  background-color: #f8f9fa;
  top: 9vh;
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
  flex-direction: column;
`;
const Bottom = styled.div`
  width: 100%;
  height: 38%;
  align-items: center;
  display: flex;
  justify-content: center;
`;
const Name = styled.span`
  font-size: 18px;
`;
const Username = styled.span`
  font-size: 12px;
`;

const LogoutText = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const IconStyle = { height: "35px", width: "35px", cursor: "pointer" };
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuRoundedIcon style={IconStyle} onClick={handleClick} />
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
              <Username>user@mail.com</Username>
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
