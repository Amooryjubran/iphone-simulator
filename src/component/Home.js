import styled from "styled-components";
import BG from "../assets/wallpaper.jpeg";
import { AppsList } from "../assets/data";
import App from "./App";
import useLongPress from "../hooks/useLongPress";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function Home() {
  const [longPress, isLongPressed] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [app, setApp] = useState(0);
  const onLongPress = useLongPress();
  return (
    <>
      <Wrapper>
        <Container>
          {AppsList.map((app, index) => {
            return (
              <Parent key={index} id={index}>
                <Buttons
                  {...onLongPress(() => [
                    isLongPressed(!longPress),
                    setApp(index),
                  ])}
                  // onClick={() => document.getElementById(index).remove()}
                >
                  <App
                    props={app}
                    longPress={longPress}
                    setDeleteModal={setDeleteModal}
                    deleteModal={deleteModal}
                  />
                </Buttons>
                <BTN
                  //
                  onClick={() => setDeleteModal(true)}
                  longPress={longPress}
                >
                  <div>—</div>
                </BTN>
              </Parent>
            );
          })}
        </Container>
      </Wrapper>

      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          deleteModal={deleteModal}
          app={app}
          isLongPressed={isLongPressed}
        />
      )}
    </>
  );
}
const Buttons = styled.button`
  background: transparent;
  border: none;
`;
const Parent = styled.div`
  @keyframes Shake {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(2px, 2px) rotate(2deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-2px, 2px) rotate(-2deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const BTN = styled.button`
  position: absolute;
  background-color: lightgray;
  padding: 5px 7px;
  border-radius: 50%;
  left: 10px;
  top: -10px;
  border: none;
  display: ${(props) => (!props.longPress ? "none" : "block")};
  animation: Shake 0.5s infinite;
`;
const Wrapper = styled.div`
  max-height: 844px;
  height: 100%;
  width: 100%;
  max-width: 400px;
  background-image: url(${BG});
  background-size: 100% 100%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0px;
  grid-row-gap: 23px;
  margin: 20px 0;
  > button {
    background: transparent;
    border: none;
    outline: none;
  }
`;
