import { styled } from "styled-components";

const PageNoteFoundEl = styled.div`
  width: 100%;
  padding-top: 100px;
  font-size: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`;

const PageNoteFound = () => {
  return (
    <PageNoteFoundEl>
      <div>404</div>
      <div>page not found</div>
    </PageNoteFoundEl>
  );
};

export default PageNoteFound;
