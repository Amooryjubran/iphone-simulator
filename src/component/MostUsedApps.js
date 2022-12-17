import { useState } from "react";
import styled from "styled-components";
import { FavApps } from "../assets/data";
import useLongPress from "../hooks/useLongPress";
import App from "./App";
import DeleteModal from "./DeleteModal";

export default function MostUsedApps() {
  const [longPress, isLongPressed] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [app, setApp] = useState(0);
  const onLongPress = useLongPress();
  return (
    <Container>
      {FavApps.map((app, index) => {
        return (
          <Parent key={index} id={index}>
            <Buttons
              {...onLongPress(() => [isLongPressed(!longPress), setApp(index)])}
            >
              <App
                showText={false}
                props={app}
                longPress={longPress}
                setDeleteModal={setDeleteModal}
                deleteModal={deleteModal}
              />
            </Buttons>
            <BTN onClick={() => setDeleteModal(true)} longPress={longPress}>
              <div>—</div>
            </BTN>
          </Parent>
        );
      })}
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          deleteModal={deleteModal}
          app={app}
          isLongPressed={isLongPressed}
        />
      )}
    </Container>
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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  grid-row-gap: 23px;
  position: absolute;
  bottom: 10px;
  background: rgb(45, 8, 53, 0.5);
  padding: 15px 20px;
  border-radius: 30px;
  width: 100%;
  width: 94%;
  max-width: 400px;
  > button {
    background: transparent;
    border: none;
    outline: none;
  }
`;
