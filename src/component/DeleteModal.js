import styled from "styled-components";
import { AppsList } from "../assets/data";

export default function DeleteModal(props) {
  console.log(props);
  console.log(AppsList[props?.app]);
  console.log(props?.app);
  return (
    <Wrapper>
      <h1>Remove "{AppsList[props?.app].name}"?</h1>
      <span>
        Removing from Home Screen will keep the app in your App Library.
      </span>
      <div>
        <button
          onClick={() => [
            document.getElementById(props?.app).remove(),
            props.setDeleteModal(false),
            props.isLongPressed(false),
          ]}
        >
          Delete App
        </button>
        <button>Remove from Home Screen</button>
        <button onClick={() => props.setDeleteModal(false)}>Cancel</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  position: absolute;
  overscroll-behavior: contain;
  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: fit-content;
  box-shadow: rgb(0 0 0 / 70%) 0rem 0rem 100vh 100vh;
  z-index: 9999;
  width: 94%;
  max-width: 65%;
  gap: 10px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20.5px);

  > h1 {
    text-align: center;
    font-size: 23px;
    padding: 20px 10px 0;
  }
  > span {
    text-align: center;
    font-weight: bold;
    padding: 0 18px;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
  > div > button {
    border: none;
    border-top: 1px solid lightgray;
    background: transparent;
    padding: 10px 0;
    cursor: pointer;
    font-size: 20px;
    color: #6f94bb;
  }
  > div > button:first-child {
    color: red;
  }
`;
