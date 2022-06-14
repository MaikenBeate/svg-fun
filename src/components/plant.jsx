import { ReactComponent as Stilk } from "../svg/plante/stilk.svg";
import styled from "styled-components";
import { useState } from "react";

const Plant = () => {
  const [animating, setAnimating] = useState(false);

  return (
    <StyldContainer onClick={() => setAnimating(!animating)}>
      <StyledSquare1 animating={animating} />
      <StyledSquare2 animating={animating} />
      <StyledStilk />
    </StyldContainer>
  );
};

const StyldContainer = styled.div`
  position: relative;
`;

const StyledSquare1 = styled.div`
  width: 21rem;
  height: 38rem;
  background-color: white;
  position: absolute;
  top: 0rem;
  left: 5rem;
  opacity: 1;
  ${({ animating }) => (animating ? "transition: transform 2s linear;" : "")}
  ${({ animating }) => (animating ? "transform: translate(0, -40rem);" : "")}
`;

const StyledSquare2 = styled.div`
  width: 21rem;
  height: 7rem;
  background-color: white;
  position: absolute;
  top: 0rem;
  left: 5rem;
  opacity: 1;

  ${({ animating }) =>
    animating ? "transition: transform 2.5s ease-out 1.5s;" : ""}
  ${({ animating }) => (animating ? "transform: translate(-22rem, 0);" : "")}
`;

const StyledStilk = styled(Stilk)`
  height: 38rem;
`;

export default Plant;
