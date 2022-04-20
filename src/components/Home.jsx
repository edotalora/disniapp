import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";
function Home(props) {
  return (
    <Container>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Movies></Movies>
    </Container>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  height: 100vh;
  overflow-x: hidden;
  &:before {
    position: absolute;
    background-image: url("/images/home-background.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
