import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import BoltIcon from "@mui/icons-material/Bolt";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CaptureIcon from "../../assets/capture.png";
import ExpandImage from "./ExpandImage";
export default function Camera() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [handleExpand, setHandleExpand] = useState(false);
  const [loading, setLoading] = useState(true);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  const handleExpandImage = () => {
    setHandleExpand(true);
  };
  return (
    <Parent>
      <Header>
        <BoltIcon />
        <KeyboardArrowUpIcon />
        <RadioButtonCheckedIcon />
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored={true}
        style={{
          position: "absolute",
          textAlign: "center",
          zindex: 8,
          right: 0,
          height: "100%",
          width: "inherit",
          objectFit: "cover",
          maxHeight: "844px",
          opacity: loading ? 0 : 1,
        }}
      />
      <Footer>
        <Top>
          <span>CENEMATIC</span>
          <span>VIDEO</span>
          <span>PHOTO</span>
          <span>POTRAIT</span>
          <span>PANO</span>
        </Top>
        <Buttons>
          <ImageReview>
            <button onClick={() => imgSrc && handleExpandImage()}>
              {imgSrc && <img src={imgSrc} alt="camera" />}
            </button>
          </ImageReview>
          <Capture onClick={capture}>
            <img src={CaptureIcon} alt="capture" />
          </Capture>
          <Repeat>
            <RestartAltIcon />
          </Repeat>
        </Buttons>
      </Footer>
      {handleExpand && (
        <ExpandImage imgSrc={imgSrc} setHandleExpand={setHandleExpand} />
      )}
    </Parent>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 23;
  > svg {
    color: white;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
  }
`;
const Loader = styled.div`
  position: absolute;
  text-align: center;
  z-index: 8;
  right: 0;
  height: 100%;
  width: inherit;
  object-fit: fill;
  max-height: 844px;
  background-color: black;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  color: white;
  width: 100%;
`;
const Parent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 999999;
  max-height: 844px;
  height: 100%;
  width: 100%;
  max-width: 400px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 23;
  display: flex;
  flex-direction: column;
`;
const Repeat = styled.button`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #282828;
  border: none;
  > svg {
    color: white;
  }
`;
const Capture = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background-color: white;
  cursor: pointer;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const ImageReview = styled.div`
  width: 43px;
  background-color: #282828;
  height: 40px;
  border-radius: 3px;
  > button {
    border: none;
    height: 100%;
    width: 100%;
    background: transparent;
    cursor: pointer;
  }
  > button > img {
    height: 100%;
    width: 100%;
  }
`;
