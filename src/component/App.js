import styled from "styled-components";

export default function App(props) {
  const { name, img } = props.props;
  const { longPress, showText } = props;
  return (
    <Container longPress={longPress}>
      <img src={img} alt="app" />
      <span>{showText && name}</span>
    </Container>
  );
}

const Container = styled.div`
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
  @keyframes Enlarge {
    0% {
      /* min-width: 80px; */
      filter: brightness(0%);
      height: 25vh;
    }

    50% {
      /* min-width: 50vh; */
      filter: brightness(0%);
      height: 50vh;
    }
    100% {
      /* min-width: 100vh; */
      filter: brightness(0%);
      z-index: 99999999;
      height: 75vh;
    }
  }
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  gap: 5px;
  animation: ${(props) => (props.longPress ? "Shake 0.5s infinite" : "none")};
  position: relative;
  > img {
    height: 100%;
    max-height: 80px;
    min-height: 60px;
    width: 100%;
    max-width: 60px;
    border-radius: 15px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  > .active {
    max-height: none;
    min-width: 100vh;
    margin-top: -51px;
    animation: Enlarge 0.1s;
    filter: brightness(0%);
    position: fixed;
    left: 0;
    max-width: 100%;
    min-width: 0;
    top: 0;
    z-index: 3323232323232;
    height: 100vh;
  }
  > span {
    color: white;
    font-size: 12px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
