import styled, { css } from 'styled-components';

export const Container = styled.div<{ isECommerceCard: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding-bottom: 24px;
  color: ${({ theme }) => theme.colors.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ isECommerceCard }) =>
    isECommerceCard &&
    css`
      flex: 1 0 0%;
      flex-direction: column;
      gap: 50px;
      min-height: 600px;
      height: 100%;
      margin-bottom: 24px;
      padding: 24px;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 8px;
      background-clip: border-box;
      transition: background 0.5s, border 0.5s;

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.borderHighlight};
        box-shadow: 0px 8px 16px rgb(12 17 66 / 12%);
      }

      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-size: 16px;
        line-height: 24px;
      }
    `}

  p {
    display: block;
    margin: 0px 0 24px 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
  }

  a {
    margin: 0;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ImageWrapper = styled.div<{ width: number }>`
  display: block;
  min-width: ${({ width }) => width}px;
  width: ${({ width }) => width}px;
`;
