import styled from "styled-components";
import Home from "./component/Home";

function App() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
export default App;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  position: relative;
`;
