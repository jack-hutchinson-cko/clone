import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.nasBannerText};
  background-color: ${({ theme }) => theme.colors.nasBannerBG};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.4, 0.55, 0.6, 0.99);
`;

export const BannerClose = styled.div`
  cursor: pointer;
  position: absolute;
  top: 19px;
  right: 24px;

  svg {
    color: ${({ theme }) => theme.colors.nasBannerText};
  }
`;
