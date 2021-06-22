import styled, { css } from 'styled-components';

type SubFooterProps = {
  isMobile?: boolean;
  isTablet?: boolean;
};

export const SubFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 70px;
`;

const getFontSizeForSubFooter = ({ isTablet, isMobile }: SubFooterProps) => {
  if (isTablet) return 11;
  if (isMobile) return 16;

  return 14;
};

export const SubFooterGridItem = styled.div<SubFooterProps>`
  display: flex;
  justify-content: space-between;
  align-items: ${({ isMobile }) => (isMobile ? 'flex-start' : 'center')};
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? 25 : 20)}px;
  width: 100%;
  font-size: ${getFontSizeForSubFooter}px;
`;

export const SubFooterTitle = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;

export const SubFooterDescription = styled.div<SubFooterProps>`
  color: ${({ theme }) => theme.colors.greyDark};

  ${({ isMobile }) =>
    isMobile
      ? css`
          font-size: 14px;
          line-height: 32px;
        `
      : css`
          max-width: 40%;
          font-size: 10px;
          line-height: 20px;
        `}

  p {
    margin: 0;
    padding: 0;
  }
`;
