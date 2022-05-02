import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg"></LogoOne>
        <SignUp>Get all here</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius animi
          aliquid repellendus rem quas, deleniti deserunt velit nihil! Unde ex
          sint deleniti esse cumque facere praesentium, eaque perferendis
          repellat quibusdam!
        </Description>
        <LogoTwo src="/images/cta-logo-two.png"></LogoTwo>
      </Content>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  height: 100vh;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    position: absolute;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;
const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const LogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin bottom:12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  color: white;
  letter-spacing: 1.5px;
  line-height: 1.5;
  text-align center;
`;
const LogoTwo = styled.img`
  width: 90%;
`;
