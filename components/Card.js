import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "./StyledImage.js";

const Article = styled.article`
  border: 3px solid black;
  border-radius: 0.8rem;
  padding: 0.5rem;
  margin: 1rem;
  background-color: #a3b18a;
  box-shadow: 5px 1px 15px 0px rgba(0, 0, 0, 0.4);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 10rem;
`;

const Figure = styled.figure`
  position: relative;
  margin: 0;
`;

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

export default function Card({ name, image, location, id }) {
  return (
    <Article>
      <Figure>
        <ImageContainer>
          <StyledImage src={image} width={500} height={200} alt="" />
        </ImageContainer>
        <figcaption>{name}</figcaption>
      </Figure>
      <p>Location: {location}</p>
      <Link href={`places/${id}`} passHref legacyBehavior>
        <Anchor>
          <ScreenReaderOnly>More Info</ScreenReaderOnly>
        </Anchor>
      </Link>
    </Article>
  );
}
