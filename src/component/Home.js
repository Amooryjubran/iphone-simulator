import styled from "styled-components";
import BG from "../assets/wallpaper.jpeg";
import { AppsList } from "../assets/data";
import App from "./App";
import Calculator from "./Calculator.js";
import Camera from "./Camera/Camera.js";
import useLongPress from "../hooks/useLongPress";
import { Fragment, useState } from "react";
import DeleteModal from "./DeleteModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SwipeUpExit from "./SwipeUpExit";

export default function Home() {
  const [longPress, isLongPressed] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [handeExpand, setHandleExpand] = useState(false);
  const [app, setApp] = useState(0);
  const [realIndex, seatRealIndex] = useState(null);
  const [openApp, setOpenApp] = useState(null);

  const onLongPress = useLongPress();

  let componentsArray = ["", "", "", Calculator, "", "", "", Camera];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 4,
    variableWidth: true,
  };
  const hanldeExpandFunc = (e, index) => {
    e.target.querySelector("img").classList.add("active");
    document.querySelector(".slick-track").style.transform = "none";
    setTimeout(() => {
      setOpenApp(true);
      seatRealIndex(index);
      e.target.querySelector("img").classList.remove("active");
      document.querySelector(".slick-track").style.transform =
        "translate3d(-400px, 0px, 0px)";
    }, 500);
  };
  return (
    <>
      <Wrapper>
        <Container>
          <SliderS {...settings}>
            {AppsList.map((app, index) => {
              return (
                <Parent key={index} id={index}>
                  <Buttons
                    {...onLongPress(() => [
                      isLongPressed(!longPress),
                      setApp(index),
                    ])}
                    onClick={(e) => {
                      componentsArray[index - 1] && hanldeExpandFunc(e, index);
                    }}
                  >
                    <App
                      props={app}
                      longPress={longPress}
                      setDeleteModal={setDeleteModal}
                      deleteModal={deleteModal}
                      setHandleExpand={setHandleExpand}
                      handeExpand={handeExpand}
                      showText={true}
                    />
                  </Buttons>
                  <BTN
                    onClick={() => setDeleteModal(true)}
                    longPress={longPress}
                  >
                    <div>—</div>
                  </BTN>
                </Parent>
              );
            })}
          </SliderS>
        </Container>
      </Wrapper>
      {openApp &&
        componentsArray.map((Component, index) => {
          if (index + 1 !== realIndex || !Component) return null;
          return (
            <Fragment key={index}>
              <Component />
              <SwipeUpExit openApp={openApp} setOpenApp={setOpenApp} />
            </Fragment>
          );
        })}
      {deleteModal && (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          deleteModal={deleteModal}
          app={app}
          isLongPressed={isLongPressed}
        />
      )}
    </>
  );
}
const Buttons = styled.button`
  background: transparent;
  border: none;
`;
const Parent = styled.div`
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
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: relative;
  /* width: 60% !important; */
  margin: 20px 0;
`;
const BTN = styled.button`
  position: absolute;
  background-color: lightgray;
  padding: 5px 7px;
  border-radius: 50%;
  left: 10px;
  top: -10px;
  border: none;
  display: ${(props) => (!props.longPress ? "none" : "block")};
  animation: Shake 0.5s infinite;
`;
const Wrapper = styled.div`
  max-height: 844px;
  height: 100%;
  width: 100%;
  max-width: 400px;
  background-image: url(${BG});
  background-size: 100% 100%;
`;

const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0px;
  grid-row-gap: 15px;
  margin: 40px 0; */
  > button {
    background: transparent;
    border: none;
    outline: none;
  }
`;
const SliderS = styled(Slider)`
  .slick-arrow {
    display: none !important;
  }
  &:hover {
    .slick-arrow {
      display: none !important;
    }
  }
  .slick-slider {
    margin: -30px 0 0;
  }
  .slick-slide {
    z-index: 1;
    margin: 30px 0;
    position: relative;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 45px;
  }
  .slick-prev:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid black;
    border-right: 2px solid black;
    transform: rotate(225deg);
    left: 10px;
    top: ${(props) => (props.state ? "-13px" : "8px")};
  }
  .slick-next:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid black;
    border-right: 2px solid black;
    transform: rotate(45deg);
    left: 6px;
    top: ${(props) => (props.state ? "-13px" : "8px")};
  }
  .slick-prev {
    z-index: 43242342342;
  }
  .slick-next {
    right: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 15px;
    border-radius: 50%;
  }
  .slick-prev {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 15px;
    border-radius: 50%;
  }
  .slick-disabled {
    opacity: 0% !important;
  }
  .slick-dots {
    background: rgb(45, 8, 53, 0.5);
    padding: 5px 10px;
    border-radius: 30px;
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }
  .slick-dots li button:before {
    color: whitesmoke;
    line-height: 13px;
  }
  .slick-dots {
    position: absolute;
    bottom: -224px;
    width: auto;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .slick-dots li button {
    width: 10px;
    height: 10px;
  }
  .slick-dots li {
    margin: 0;
  }
`;
