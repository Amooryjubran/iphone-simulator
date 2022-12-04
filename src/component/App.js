import styled from "styled-components";

export default function App(props) {
  const { name, img } = props.props;
  const { longPress } = props;
  //   console.log(deleteModal);
  return (
    <Container longPress={longPress}>
      <img src={img} alt="app" />
      <span>{name}</span>
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
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
