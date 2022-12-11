import styled from "styled-components";

export default function SwipeUpExit(props) {
  const { setOpenApp, lockScreen } = props;
  const handleCloseApp = () => {
    setOpenApp(false);
  };
  return (
    <Swipe lockScreen={lockScreen} onClick={() => handleCloseApp()}></Swipe>
  );
}

const Swipe = styled.button`
  @keyframes Shake {
    0% {
      bottom: 10px;
    }
    25% {
      bottom: 12px;
    }
    50% {
      bottom: 14px;
    }
    75% {
      bottom: 16px;
    }
    100% {
      bottom: 18px;
    }
  }
  height: 5px;
  width: 100%;
  max-width: 40%;
  margin: 0 auto;
  position: absolute;
  bottom: 10px;
  background: rgb(245, 245, 245, 0.5);
  z-index: 9999999;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  animation: ${(props) => (!props.lockScreen ? "none" : "Shake 1s infinite")}; ;
`;
