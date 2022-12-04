import styled from "styled-components";
import Header from "./component/Header";
import Home from "./component/Home";
import MostUsedApps from "./component/MostUsedApps";

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <MostUsedApps />
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
  display: flex;
  flex-direction: column;
`;
