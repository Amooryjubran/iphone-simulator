import { useRef, useState } from "react";
import styled from "styled-components";
import Lock from "../assets/lock.png";
import BG from "../assets/wallpaper.jpeg";

import SwipeUpExit from "./SwipeUpExit";
import Passcode from "./Passcode";
import PassCodeButton from "./PassCodeButton";
export default function LockScreen(props) {
  const [passcode, setPasscode] = useState(true);
  const pass = [1, 1, 1, 2, 2, 2];
  const [userPass, setUerPass] = useState([]);
  const inputRef = useRef(null);
  const [shakeAnimation, setShakeAnimation] = useState(false);
  if (passcode)
    return <Passcode passcode={passcode} setPasscode={setPasscode} />;
  let result = userPass.map((i) => Number(i));
  if (pass.toString() === result.toString())
    setTimeout(() => {
      inputRef.current?.click();
    }, 500);

  return (
    <Wrapper>
      <Container>
        <img src={Lock} alt="Lock" />
        <Parent>
          <span>Enter Passcode</span>
          <PassWordContainer shakeAnimation={shakeAnimation}>
            {pass.map((pass, index) => {
              return (
                <Circle
                  userPass={userPass.length}
                  key={index}
                  id="circle"
                ></Circle>
              );
            })}
          </PassWordContainer>
        </Parent>
        <PasswordNumbers>
          <PassCodeButton
            num="1"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <PassCodeButton
            num="2"
            A="A"
            B="B"
            C="C"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <PassCodeButton
            num="3"
            A="D"
            B="E"
            C="F"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <PassCodeButton
            num="4"
            A="G"
            B="H"
            C="I"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <PassCodeButton
            num="5"
            A="J"
            B="K"
            C="L"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <PassCodeButton
            num="6"
            A="M"
            B="N"
            C="O"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <PassCodeButton
            num="7"
            A="P"
            B="Q"
            C="R"
            D="S"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <PassCodeButton
            num="8"
            A="T"
            B="U"
            C="V"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <PassCodeButton
            num="9"
            A="W"
            B="C"
            C="Y"
            D="Z"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <div></div>
          <PassCodeButton
            num="0"
            userPass={userPass}
            setUerPass={setUerPass}
            setShakeAnimation={setShakeAnimation}
          />
          <div></div>
        </PasswordNumbers>
      </Container>
      <SwipeUpExit setOpenApp={props.isLocked} innerRef={inputRef} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-height: 844px;
  height: 100%;
  width: 100%;
  max-width: 400px;
  background-image: url(${BG});
  background-size: 100% 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0 0;

  > span {
    font-size: 20px;
    color: white;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  > span {
    color: #fff8ff;
    font-size: 26px;
  }
  > h1 {
    color: #fff8ff;
    font-size: 90px;
    line-height: 0.5;
  }
  > img {
    height: 20px;
    width: 15px;
    filter: brightness(0) invert(1);
  }
`;
const PassWordContainer = styled.div`
  @keyframes shaking {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(-5px);
    }
    75% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 10px;
  gap: 20px;
  animation: ${(props) =>
    props.shakeAnimation ? "shaking 0.25s infinite" : "none"};
`;
const Circle = styled.div`
  padding: 7px;
  background-color: ${(props) => (!props.longPress ? "transparent" : "white")};
  border: 1px solid white;
  border-radius: 50%;
`;

const PasswordNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  max-width: 80%;
  width: 100%;
  justify-items: center;
  row-gap: 20px;
  margin: 70px 0;
`;
