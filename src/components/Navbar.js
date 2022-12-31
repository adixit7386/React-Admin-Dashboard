import React, { useState } from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch } from "react-redux";
import { Mobile } from "../response";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { toggleSidebar } from "../redux/sideRedux";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 3;
  background-color: #f8f9fa;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 43px;
  margin-right: 26px;
  ${Mobile({ marginLeft: "39px", marginRight: "26px" })}
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
  margin-left: 30px;
  ${Mobile({ marginLeft: "10px" })}
`;

const AccountContainer = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 5px;
  position: absolute;
  background-color: #f8f9fa;
  top: 70px;
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
  cursor: pointer;

  justify-content: center;
  margin: 5px;
  border-radius: 5px;
  &:hover {
    background-color: lightgray;
  }
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
  const navigate = useNavigate();
  const IconStyle = { height: "35px", width: "35px", cursor: "pointer" };
  const dispatch = useDispatch();
  const handleClickNavigate = (props) => {
    if (props === "logout") {
      navigate("/login");
    } else {
      navigate("/home");
    }
  };
  const handleClick = () => {
    dispatch(toggleSidebar());
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuRoundedIcon style={IconStyle} onClick={handleClick} />
          <Title onClick={() => handleClickNavigate("home")}>Admin</Title>
        </Left>

        <Right>
          <PersonIcon
            onClick={() => {
              setClicked((data) => !data);
            }}
            style={IconStyle}
          />
        </Right>
        {clicked && (
          <AccountContainer>
            <Top>
              <PersonIcon
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
            <Bottom onClick={() => handleClickNavigate("logout")}>
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
