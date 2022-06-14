import { ReactComponent as Heart } from "../svg/heart.svg";
import { ReactComponent as FilledHeart } from "../svg/heart-filled.svg";
import styled from "styled-components";
import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <StyledButton onClick={() => setLiked(!liked)}>
      <StyledHeart liked={liked} />
      <StyledFilledHeart liked={liked} className="heart" />
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
`;

export default LikeButton;
