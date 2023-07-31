import styled from "@emotion/styled";

function sizeContainer(size) {
  switch (size) {
    case "sm":
      return `max-width: 640px;`;
    case "lg":
      return `max-width: 1024px;`;
    case "xl":
      return `max-width: 1280px;`;
    default:
      return `max-width: 768px;`;
  }
}

export const StyledDiv = styled.div`
  // padding: 0 16px;
  margin: auto;
  ${(props) => sizeContainer(props.size)}
`;
