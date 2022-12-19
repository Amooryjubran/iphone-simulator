import styled from "styled-components";
import BG from "../assets/wallpaper.jpeg";
import Lock from "../assets/lock.png";
import SwipeUpExit from "./SwipeUpExit";
import { useEffect, useState } from "react";
import FlashlightOnIcon from "@mui/icons-material/FlashlightOn";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
export default function Passcode(props) {
  const [date, setDate] = useState("");

  useEffect(() => {
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    var timer = setInterval(
      () => [setDate(new Date().toLocaleTimeString("en-us", options))],
      1000
    );
    return function cleanup() {
      clearInterval(timer);
    };
  }, [date]);
  if (!date) return;
  console.log(props);
  const day = date.split(",")[0];
  const todayDaye = date.split(",")[1];
  const time = date.split(",")[2];
  const fixedTime = time.substr(time.length - 8);
  const { setPasscode } = props;
  return (
    <Wrapper>
      <Container>
        <img src={Lock} alt="Lock" />
        <span>
          {day}, {todayDaye}
        </span>
        <h1>{fixedTime.substring(0, fixedTime.length - 3)}</h1>
      </Container>
      <Footer>
        <div>
          <FlashlightOnIcon />
        </div>
        <div>
          <CameraAltIcon />
        </div>
      </Footer>
      <SwipeUpExit setOpenApp={setPasscode} lockScreen={true} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-height: 844px;
  height: 100%;
  width: 100%;
  max-width: 400px;
  background-image: url(${BG});
  /* filter: blur(8px); */
  background-size: 100% 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

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

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > div {
    background: #342f29;
    padding: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div > svg {
    color: white;
  }
`;
