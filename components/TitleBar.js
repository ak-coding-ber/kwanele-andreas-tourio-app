import styled from "styled-components";

const Headline = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #344e41;
  color: #f2e8cf;
  box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.62);
  margin: 0;
  padding: 20px;
  text-align: center;
  z-index: 1;
`;

export default function TitleBar() {
  return <Headline>Tourio</Headline>;
}
