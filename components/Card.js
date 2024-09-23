import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "./StyledImage.js";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.8rem;
  padding: 0.5rem;
  margin: 1rem;
  background-color: #a3b18a;
  box-shadow: 5px 1px 15px 0px rgba(0, 0, 0, 0.7);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 10rem;
  margin: 1rem 0;
  border: 1px solid #f2e8cf;
`;

const ImageCaption = styled.figcaption`
  position: relative;
  margin-top: 3rem;
  font-size: 2rem;
  text-align: center;
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
        <ImageCaption>{name}</ImageCaption>
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
