import styled from "styled-components";
import { FormContainer, Input, Label } from "./Form";
import { StyledButton } from "./StyledButton.js";

export default function Comments({ locationName, comments, onSubmit }) {
  const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #a3b18a;
    border-radius: 0.8rem;
    box-shadow: 5px 5px 15px 0px #000000;
    padding: 0.5rem;
    margin: 1rem;
    text-align: center;
    p {
      border-bottom: solid 1px black;
      padding: 20px;
    }
  `;

  const CommentContainer = styled.li`
    background-color: #f2e8cf;
    border-radius: 0.5rem;
    padding: 0 2rem 2rem 2rem;
    box-shadow: 5px 5px 15px 0px #000000;
    margin-bottom: 1rem;
    list-style-type: none;
  `;

  return (
    <Article>
      <FormContainer onSubmit={onSubmit}>
        <Label htmlFor="name">Your Name</Label>
        <Input type="text" name="name" placeholder="name" />
        <Label htmlFor="comment">Your Comment</Label>
        <Input type="text" name="comment" placeholder="comment here..." />
        <StyledButton type="submit">Send</StyledButton>
      </FormContainer>
      {comments && (
        <>
          <h1> {comments.length} fans commented on this place:</h1>
          <ul>
            {comments.map(({ name, comment }, idx) => {
              return (
                <>
                  <CommentContainer>
                    <p key={idx}>
                      <small>
                        <strong>{name}</strong> commented on {locationName}
                      </small>
                    </p>
                    <span>{comment}</span>
                  </CommentContainer>
                </>
              );
            })}
          </ul>
        </>
      )}
    </Article>
  );
}
