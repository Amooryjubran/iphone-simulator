import styled from "styled-components";

export default function PassCodeButton(props) {
  const { num, A, B, C, D } = props;
  return (
    <BUTTON>
      <div>
        <span>{num}</span>
        <div>
          <span>{A}</span>
          <span>{B}</span>
          <span>{C}</span>
          {D && <span>{D}</span>}
        </div>
      </div>
    </BUTTON>
  );
}
const BUTTON = styled.button`
  background-color: #363128;
  border: none;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  > div > span {
    color: white;
    font-size: 26px;
  }
  > div > div {
    display: flex;
    gap: 5px;
    justify-content: center;
  }
  > div > div > span {
    color: white;
    font-size: 11px;
  }
`;
