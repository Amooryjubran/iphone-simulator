import { useEffect } from "react";
import styled from "styled-components";

export default function PassCodeButton(props) {
  const { num, A, B, C, D, userPass, setUerPass } = props;

  useEffect(() => {
    setUerPass(userPass);
  }, [userPass, setUerPass]);

  return (
    <BUTTON
      onClick={(e) => {
        e.preventDefault();
        const circles = document.querySelectorAll("#circle");
        if (userPass.length >= 6) {
          setUerPass([]);
          circles.forEach((btn) => {
            btn.style.background = "transparent";
          });
          return;
        }
        circles[userPass.length].style.background = "white";
        setUerPass([...userPass, ...num]);
      }}
    >
      <div>
        <span>{num}</span>
        <div>
          <span>{A}</span>
          <span>{B}</span>
          <span>{C}</span>
          {D && <span>{D}</span>}
        </div>
      </div>
    </BUTTON>
  );
}
const BUTTON = styled.button`
  background-color: #363128;
  border: none;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  cursor: pointer;
  > div > span {
    color: white;
    font-size: 26px;
  }
  > div > div {
    display: flex;
    gap: 5px;
    justify-content: center;
  }
  > div > div > span {
    color: white;
    font-size: 11px;
  }
`;
