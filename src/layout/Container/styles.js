import styled from "@emotion/styled";

function sizeContainer(size) {
  switch (size) {
    case "sm":
      return `640px`;
    case "lg":
      return `1024px`;
    case "xl":
      return `1280px`;
    default:
      return `768px`;
  }
}

export const StyledDiv = styled.div`
  // padding: 0 16px;
  margin: auto;
  max-width: ${(props) => sizeContainer(props.size)};
  padding: ${(props) => props.padding};
`;
