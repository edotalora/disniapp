import React from "react";
import styled from "styled-components";

function Detail(props) {
  return (
    <Container>
      <Background>
        <img
          src="https://www.themoviedb.org/t/p/w1280/zxizwEPE8jhpbMgrFbwCztgvh2m.jpg"
          alt=""
        />
      </Background>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
