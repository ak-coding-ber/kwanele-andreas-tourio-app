import Link from "next/link";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";
import { StyledLink } from "../../../components/StyledLink.js";
import { StyledButton } from "../../../components/StyledButton.js";
import { StyledImage } from "../../../components/StyledImage.js";
import Comments from "../../../components/Comments.js";

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 15rem;
`;

const ButtonContainer = styled.section`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & > * {
    flex-grow: 1;
    text-align: center;
  }
`;

const StyledLocationLink = styled(StyledLink)`
  text-align: center;
  background-color: #a3b18a;
  color: black;
  width: 80%;
  justify-self: center;
`;

const StyledHeading = styled.h2`
  text-align: center;
`;

export default function DetailsPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: place,
    isLoading,
    error,
    mutate,
  } = useSWR(id ? `/api/places/${id}` : null);

  if (!isReady || isLoading || error || !place) return <h2>Loading...</h2>;

  async function deletePlace() {
    const response = await fetch(`/api/places/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleSubmitComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const commentData = Object.fromEntries(formData);
    const response = await fetch(`/api/places/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    if (response.ok) {
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  return (
    <>
      <Link href={"/"} passHref legacyBehavior>
        <StyledLink justifySelf="start" margin={"1rem 0 1rem 1rem"}>
          back
        </StyledLink>
      </Link>
      <ImageContainer>
        <StyledImage
          src={place.image}
          responsive
          width={600}
          height={300}
          alt=""
          border="1px solid #344e41"
          margin="0 1rem"
        />
      </ImageContainer>
      <StyledHeading>
        {place.name}, {place.location}
      </StyledHeading>
      <Link href={place.mapURL} passHref legacyBehavior>
        <StyledLocationLink>Location on Google Maps</StyledLocationLink>
      </Link>
      <p style={{ textAlign: "center" }}>{place.description}</p>
      <ButtonContainer>
        <Link href={`/places/${id}/edit`} passHref legacyBehavior>
          <StyledLink>Edit</StyledLink>
        </Link>
        <StyledButton onClick={deletePlace} type="button" variant="delete">
          Delete
        </StyledButton>
      </ButtonContainer>
      <Comments
        locationName={place.name}
        comments={place.comments}
        onSubmit={handleSubmitComment}
      />
    </>
  );
}
