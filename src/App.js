import LikeButton from "./components/like-button";
import styled from "styled-components";
import Plant from "./components/plant";

function App() {
  return (
    <StyledContainer>
      <LikeButton />
      {/* <Plant /> */}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
