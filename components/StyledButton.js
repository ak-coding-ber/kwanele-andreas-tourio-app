import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: #344e41;
  padding: 0.8rem;
  border-radius: 0.6rem;
  box-shadow: 5px 5px 15px 0px #000000;
  color: #dad7cd;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: firebrick;
      color: white;
    `}
`;
