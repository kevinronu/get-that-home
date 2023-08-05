import styled from "@emotion/styled";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

export const RightArrowContainer = styled.div`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.text.standard};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.pink[500]};
  }
`;

export const LeftArrowContainer = styled.div`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.text.standard};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.pink[500]};
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;

  .active {
    color: ${(props) => props.theme.colors.pink[500]};
  }
`;

export const DotContainer = styled.div`
  margin: 0 0.5rem;
  cursor: pointer;
`;

export const StyledImg = styled.img`
  max-height: 24rem;
  max-width: 32rem;
  font-size: 1.5rem;
  object-fit: cover;
  aspect-ratio: 3/4;
`;
