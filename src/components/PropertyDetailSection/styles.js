import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledSection = styled.section`
  margin: 16px 0;

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .property-info {
    flex-grow: 1;
  }

  .address-price {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    font-size: 2.25rem;
    line-height: 3rem;
    letter-spacing: 0.01563rem;
  }

  .address-price__price {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .city-country {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.00938rem;
    margin-bottom: 1rem;
  }

  .line {
    border: 0.0625rem solid ${(props) => props.theme.colors.pink[600]};
    border-radius: 0.5rem;
  }

  .highlights {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
  }

  .highlights__element {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 1.5rem;
    line-height: 2rem; /* 133.333% */
  }

  .about-location__title {
    color: ${(props) => props.theme.colors.pink[600]};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem; /* 140% */
    letter-spacing: 0.00938rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .about-location__description {
    letter-spacing: 0.03125rem;
    margin-bottom: 1rem;
    font-family: ${fonts.secondary};
  }

  @media only screen and (max-width: 1030px) {
    .container {
      gap: 1rem;
      justify-content: center;
    }
  }
`;
