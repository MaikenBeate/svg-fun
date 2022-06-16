import { ReactComponent as Stilk } from "../svg/plante/stilk.svg";
import { ReactComponent as Blad1 } from "../svg/plante/blad1.svg";
import { ReactComponent as Blad2 } from "../svg/plante/blad2.svg";
import styled from "styled-components";
import { useState } from "react";

const Plant = () => {
  const [animating, setAnimating] = useState(false);

  return (
    <StyldContainer onClick={() => setAnimating(!animating)}>
      <StyledSquare1 animating={animating} />
      <StyledSquare2 animating={animating} />
      <StyledStilk />
      <StyledBlad1 animating={animating} />
      <StyledBlad2 animating={animating} />
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

const StyledBlad1 = styled(Blad1)`
  position: absolute;
  top: 33rem;
  left: 18rem;
  width: 0.1rem;
  height: 0.1rem;
  transform-origin: 0% 100%;

  ${({ animating }) =>
    animating
      ? "transition: transform 1s cubic-bezier( 0.36, 0.44, 1, 0.25 ) 3s;"
      : ""}
  ${({ animating }) => (animating ? " transform: scale(16);" : "")}
`;

const StyledBlad2 = styled(Blad2)`
  position: absolute;
  top: 28rem;
  left: 19.6rem;
  width: 0.1rem;
  height: 0.1rem;
  transform-origin: 0% 40%;

  ${({ animating }) =>
    animating
      ? "transition: transform 1s cubic-bezier( 0.59, -0.1, 0.05, 0.92 ) 5s;"
      : ""}
  ${({ animating }) => (animating ? " transform: scale(20);" : "")}
`;

const StyledStilk = styled(Stilk)`
  height: 38rem;
`;

export default Plant;
