import { useEffect } from "react";
import styled from "styled-components";

export default function PassCodeButton(props) {
  const { num, A, B, C, D, userPass, setUerPass, setShakeAnimation } = props;

  useEffect(() => {
    setUerPass(userPass);
  }, [userPass, setUerPass]);

  return (
    <BUTTON
      onClick={(e) => {
        e.preventDefault();
        const circles = document.querySelectorAll("#circle");
        if (userPass.length >= 6) {
          setShakeAnimation(true);
          setUerPass([]);
          circles.forEach((btn) => {
            btn.style.background = "transparent";
          });
          setTimeout(() => {
            setShakeAnimation(false);
          }, 500);
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
  background-color: rgba(102, 102, 102, 0.5);
  border: none;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  > div > span {
    color: white;
    font-size: 34px;
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
