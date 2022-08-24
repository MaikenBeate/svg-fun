import { ReactComponent as Heart } from "../svg/heart.svg";
import { ReactComponent as FilledHeart } from "../svg/heart-filled.svg";
import styled from "styled-components";
import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <StyledButton onClick={() => setLiked(!liked)}>
      <StyledHeart liked={liked} />
      <StyledFilledHeart liked={liked} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;

const StyledHeart = styled(Heart)`
  width: 10rem;
  display: ${({ liked }) => (liked ? "none" : "block")};
`;

const StyledFilledHeart = styled(FilledHeart)`
  width: 10rem;
  display: ${({ liked }) => (liked ? "block" : "none")};

  @media (prefers-reduced-motion: no-preference) {
    animation: bounce 0.6s cubic-bezier(0.52, -0.03, 0.35, 0.99);
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    60% {
      transform: scale(1);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default LikeButton;
