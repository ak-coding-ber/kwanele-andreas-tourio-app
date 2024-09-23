import Image from "next/image.js";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
  height: 100%;
  border: ${(props) => props.border || "none"};
`;
