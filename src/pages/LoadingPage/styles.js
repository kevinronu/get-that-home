import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 1rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .loading {
    color: transparent;
    // font-size: 1.4rem;
    font-size: 2rem;
    font-weight: 500;
    position: relative;
    overflow: hidden;
  }

  .loading::before {
    content: "Loading...";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-right: 4px solid ${(props) => props.theme.colors.pink[500]};
    overflow: hidden;
    color: ${(props) => props.theme.colors.pink[500]};
    animation: load91371 2s linear infinite;
  }

  @keyframes load91371 {
    0%,
    10%,
    100% {
      width: 0;
    }

    10%,
    20%,
    30%,
    40%,
    50%,
    60%,
    70%,
    80%,
    90%,
    100% {
      border-right-color: transparent;
    }

    11%,
    21%,
    31%,
    41%,
    51%,
    61%,
    71%,
    81%,
    91% {
      border-right-color: ${(props) => props.theme.colors.pink[500]};
    }

    60%,
    80% {
      width: 100%;
    }
  }
`;
