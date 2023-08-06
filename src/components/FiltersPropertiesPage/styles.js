import styled from "@emotion/styled";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 0.5rem;

  .filters-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }

  @media only screen and (max-width: 1100px) {
    flex-direction: column;

    .button-clear {
      width: 100%;
    }
  }

  @media only screen and (max-width: 650px) {
    .filters-container {
      display: flex;
      flex-direction: column;
    }
  }
`;
