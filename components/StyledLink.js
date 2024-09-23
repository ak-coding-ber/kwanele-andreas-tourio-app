import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  background-color: #344e41;
  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  box-shadow: 5px 5px 15px 0px #000000;
  color: #dad7cd;
  text-decoration: none;
  font-weight: bold;
  margin-top: ${(props) => props.margin_top || "0"};

  ${({ justifySelf }) =>
    justifySelf &&
    css`
      justify-self: ${justifySelf};
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      text-align: center;
      background-color: white;
      border: 3px solid #344e41;
    `}
`;
