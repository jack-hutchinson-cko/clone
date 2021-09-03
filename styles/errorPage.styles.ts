import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 48px;
  padding-block: min(120px, 10vh);

  h1 {
    font-size: 100px;
    line-height: 100px;
    margin: 0 0 24px 0;
  }

  .error-message {
    margin-top: 0;
    margin-bottom: 48px;
    line-height: 32px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.5vh;

  & > * {
    flex-basis: 100%;
  }
`;
