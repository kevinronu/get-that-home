import styled from "@emotion/styled";

function sizeSection(size) {
  switch (size) {
    case "0":
      return `0`;
    case "xs":
      return `16px 0`;
    case "sm":
      return `32px 0`;
    case "lg":
      return `96px 0`;
    case "xl":
      return `144px 0`;
    default:
      return `48px 0`;
  }
}

export const StyledSection = styled.section`
  margin: ${(props) => sizeSection(props.size)};
`;
