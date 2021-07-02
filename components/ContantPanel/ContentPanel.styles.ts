import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding-bottom: 40px;
  color: ${({ theme }) => theme.colors.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};

  p {
    display: block;
    margin: 8px 0 26px 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
  }

  a {
    display: block;
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`;

export const ImageWrapper = styled.div<{ width: number }>`
  display: block;
  min-width: ${({ width }) => width}px;
`;
