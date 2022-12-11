import { useState } from "react";
import styled from "styled-components";
import Header from "./component/Header";
import Home from "./component/Home";
import LockScreen from "./component/LockScreen";
import MostUsedApps from "./component/MostUsedApps";

function App() {
  const [locked, isLocked] = useState(true);
  return (
    <Wrapper>
      <Header />
      {locked ? (
        <LockScreen isLocked={isLocked} />
      ) : (
        <>
          <Home />
          <MostUsedApps />
        </>
      )}
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
