import { useState } from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <Parent>
      <Container maxWidth="xs" style={{ magin: "0" }}>
        <Wrapper>
          <Result className="result">{num}</Result>
          <BtnsContainer>
            <button onClick={clear}>C</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={porcentage}>%</button>
            <OrangeBtn onClick={operatorHandler} value="/">
              /
            </OrangeBtn>
            <GreyBtn onClick={inputNum} value={7}>
              7
            </GreyBtn>
            <GreyBtn onClick={inputNum} value={8}>
              8
            </GreyBtn>
            <GreyBtn onClick={inputNum} value={9}>
              9
            </GreyBtn>
            <OrangeBtn onClick={operatorHandler} value="X">
              X
            </OrangeBtn>
            <GreyBtn onClick={inputNum} value={4}>
              4
            </GreyBtn>
            <GreyBtn onClick={inputNum} value={5}>
              5
            </GreyBtn>
            <GreyBtn onClick={inputNum} value={6}>
              6
            </GreyBtn>
            <OrangeBtn onClick={operatorHandler} value="-">
              -
            </OrangeBtn>
            <GreyBtn onClick={inputNum} value={1}>
              1
            </GreyBtn>
            <GreyBtn onClick={inputNum} value={2}>
              2
            </GreyBtn>
            <GreyBtn onClick={inputNum} value={3}>
              3
            </GreyBtn>
            <OrangeBtn onClick={operatorHandler} value="+">
              +
            </OrangeBtn>
            <GreyBtn
              onClick={inputNum}
              value={0}
              style={{
                width: "150px",
                textAlign: "initial",
                padding: "0 34px",
              }}
            >
              0
            </GreyBtn>
            <GreyBtn onClick={inputNum} value={"."}>
              ,
            </GreyBtn>

            <OrangeBtn onClick={calculate}>=</OrangeBtn>
          </BtnsContainer>
        </Wrapper>
      </Container>
    </Parent>
  );
}
const Parent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
`;
const Result = styled.h1`
  color: white;
  display: flex;
  justify-content: flex-end;
  margin-right: 1em;
  font-size: 3.5em;
`;
const BtnsContainer = styled.div`
  text-align: center;
  > button {
    width: 3em;
    height: 3em;
    font-size: 1.5em;
    border: none;
    border-radius: 2em;
    margin: 0.3em;
  }
  > button:hover {
    cursor: pointer;
  }
`;
const OrangeBtn = styled.button`
  background-color: #ff9500;
  color: white;
`;
const GreyBtn = styled.button`
  background-color: #505050;
  color: white;
`;
const Wrapper = styled.div`
  background-color: black;
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 23px;
  padding: 0 0 30px;
`;
