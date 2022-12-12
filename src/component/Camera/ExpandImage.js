import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export default function ExpandImage(props) {
  console.log(props);
  return (
    <Parent>
      <Header>
        <button onClick={() => props.setHandleExpand(false)}>
          <ChevronLeftIcon />
        </button>
        <KeyboardArrowUpIcon />
        <RadioButtonCheckedIcon />
      </Header>
      <IMG>
        <img src={props.imgSrc} alt="selfie" />
      </IMG>
      <Footer>
        <IosShareIcon />
        <FavoriteIcon />
        <HelpOutlineIcon />
        <span>Edit</span>
        <DeleteForeverIcon />
      </Footer>
    </Parent>
  );
}
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;
  background-color: #141413;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 23;
  > button {
    background-color: transparent;
    color: white;
    cursor: pointer;
    border: none;
  }
  > svg {
    color: white;
    /* border: 1px solid white; */
    /* border-radius: 50%;/ */
    /* display: flex; */
  }
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
  display: flex;
  justify-content: space-between;
`;
const IMG = styled.div`
  background: black;
  display: flex;
  align-items: center;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;
  background-color: #141413;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 23;
  display: flex;
  > svg {
    color: #0c84ff;
  }
  > span {
    color: #0c84ff;
  }
`;
