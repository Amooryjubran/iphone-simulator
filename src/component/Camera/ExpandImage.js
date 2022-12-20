import { useState } from "react";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IosShareIcon from "@mui/icons-material/IosShare";
import Trash from "../../assets/trash.png";
import Info from "../../assets/i.png";
import Heart from "../../assets/heart.png";
export default function ExpandImage(props) {
  const [deleteModal, setDeleteModal] = useState(false);

  const current = new Date();
  const time = current.toLocaleTimeString("en-US");
  const withoutFirstAndLast = time.slice(3, -2);

  return (
    <Parent>
      <Header>
        <button onClick={() => props.setHandleExpand(false)}>
          <ChevronLeftIcon />
        </button>
        <div>
          <span>Today</span>
          <span>{withoutFirstAndLast + time.slice(-2)}</span>
        </div>
        <RadioButtonCheckedIcon />
      </Header>
      <IMG>
        <img src={props.imgSrc} alt="selfie" />
      </IMG>
      <Footer>
        <IosShareIcon />
        <img src={Heart} alt="Heart" />
        <img src={Info} alt="Info" />
        <span>Edit</span>
        <button onClick={() => setDeleteModal(true)}>
          <img src={Trash} alt="delete" />
        </button>
        {deleteModal && (
          <RemoveModal>
            <Top>
              <span>
                This photo will be deleted from iCloud Photos on all your
                devices.
              </span>
              <DeletePhoto
                onClick={() => {
                  props.setImgSrc(null);
                  setDeleteModal(false);
                  props.setHandleExpand(false);
                }}
              >
                Delete Photo
              </DeletePhoto>
            </Top>
            <Buttom onClick={() => setDeleteModal(false)}>Cancel</Buttom>
          </RemoveModal>
        )}
      </Footer>
    </Parent>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
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
  }
  > div {
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    gap: 5px;
  }
  > div > span:nth-child(2) {
    font-size: 14px;
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
  padding: 30px 10px;
  background-color: #141413;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 23;
  > svg {
    color: #5298e2;
  }
  > span {
    color: #5298e2;
  }
  > img,
  > button > img {
    height: 23.9px;
    width: 23.9px;
    object-fit: contain;
  }
  > button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
const RemoveModal = styled.div`
  position: absolute;
  top: -180px;
  width: 100%;
  left: 0;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  background: #212020;
  border-radius: 10px;
  > span {
    color: #99928f;
    text-align: center;
    font-size: 15px;
    padding: 12px 20px;
    line-height: 1.5;
  }
`;
const DeletePhoto = styled.button`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: #ff473b;
  font-size: 20px;
  padding: 12px 30px;
`;
const Buttom = styled.button`
  background: #2d2d2e;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 12.5px 20px;
  color: #4893fe;
  font-size: 20px;
  font-weight: bolder;
  border-radius: 10px;
  cursor: pointer;
`;
