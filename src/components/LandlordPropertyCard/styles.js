import styled from "@emotion/styled";
import { fonts, typography } from "../../styles";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom: 0.4rem solid ${(props) => props.theme.colors.pink[600]};

  .property-with-owner-menu {
    min-height: 87.5%;
  }
`;

export const StyledLink = styled(Link)`
  position: relative;
  font-family: ${fonts.primary};
  font-weight: 500;

  .operation-type {
    position: absolute;
    top: 0;
    right: 0;
    color: ${(props) => props.theme.colors.white.standard};
    background-color: ${(props) => props.theme.colors.pink[400]};
    border-top-right-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
    // white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-family: ${fonts.secondary};
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.01563rem;
  }

  .photo {
    height: 12.5rem;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .info-title {
    display: flex;
    gap: 0.25rem;
    justify-content: space-between;
    padding: 0.5rem 1rem 0.25rem 1rem;
  }

  .info-title__rent {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .info-title__type {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    letter-spacing: 0.03125rem;
  }

  .info-address {
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }

  .info-footer {
    display: flex;
    justify-content: space-between;
    padding: 4px 16px 16px 16px;
  }

  .info-footer__icons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .info-footer__icon {
    display: flex;
    gap: 0.125rem;
  }
`;

export const OwnerMenu = styled.div`
  background-color: ${(props) => props.theme.colors.pink[600]};
  color: ${(props) => props.theme.colors.white.standard};
  display: flex;
  align-items: center;
  padding-top: 0.4rem;
  justify-content: space-evenly;
`;
