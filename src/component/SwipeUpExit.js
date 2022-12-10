import styled from "styled-components";

export default function SwipeUpExit(props) {
  const { setOpenApp } = props;
  const handleCloseApp = () => {
    setOpenApp(false);
  };
  return <Swipe onClick={() => handleCloseApp()}></Swipe>;
}

const Swipe = styled.button`
  height: 5px;
  width: 100%;
  max-width: 40%;
  margin: 0 auto;
  position: fixed;
  bottom: 10px;
  background: rgb(245, 245, 245, 0.5);
  z-index: 9999999;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
`;
