import { useState, useEffect } from "react";
import styled from "styled-components";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Batter from "../assets/battery.png";
export default function Header() {
  var [date, setDate] = useState(new Date());
  var [min, setMins] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(
      () => [setDate(new Date()), setMins(new Date())],
      1000
    );
    return function cleanup() {
      clearInterval(timer);
    };
  });
  return (
    <Wrapper>
      <p>
        {date.getHours()}:{min.getMinutes()}
      </p>
      <Container>
        <SignalCellularAltIcon />
        <WifiIcon />
        <img src={Batter} alt="Battery" />
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 5px;
  padding: 0 20px;
  color: white;
  > p {
    font-size: 16px;
    font-weight: bold;
    font-family: sans-serif;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  > img {
    width: 28px;
    height: 13px;
    filter: brightness(0) invert(1);
  }
  > svg {
    height: 20px;
    margin-left: -4px;
  }
`;
