import React from "react";
import styled from "styled-components";

function Detail(props) {
  return (
    <Container>
      <Background>
        <img
          src="https://www.themoviedb.org/t/p/w1280/hyN61TWnsRqGY9vunR9wpLBzPpa.jpg"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img
          src="https://www.kindpng.com/picc/m/165-1658186_spider-man-homecoming-movie-logo-transparent-hd-png.png"
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupButton>
      </Controls>
      <Subtitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        explicabo
      </Subtitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, dolores
        officia et molestiae reiciendis iusto velit nesciunt, pariatur
        cupiditate itaque libero explicabo neque nostrum consectetur numquam,
        laudantium odit! Ipsum, architecto!
      </Description>
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
  opacity: 0.7;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  min-height: 170px;
  height: 30vh;
  width: 35vw;
  min-width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: multiply;
  }
`;
const Controls = styled.div`
  display: flex;
  padding: 3px 0px;
  gap: 3px;
  align-items: center;
`;
const PlayButton = styled.div`
  background: rgb(249, 249, 249);
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  height: 56px;
  align-items: center;
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`

  background: rgba(0,0,0,0.3);
  border 1px solid rgb(249, 249, 249);
  color:rgb(249, 249, 249);
  text-transform:uppercase;
 
  &:hover{
    background-color: gray;
  }
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);

  span {
    font-size: 30px;
    color: white;
    cursor: pointer;
  }
`;
const GroupButton = styled(AddButton)`
  background: rgba(0, 0, 0);
`;
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  max-width: 600px;
  color: rgb(249, 249, 249);
  line-height: 1.4;
  margin-top: 16px;
  max-width: 750px;
`;
