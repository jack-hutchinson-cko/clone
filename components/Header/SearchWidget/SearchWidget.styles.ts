import styled, { css } from 'styled-components';

export const Results = styled.div<{ isShown: boolean }>`
  display: ${({ isShown }) => (isShown ? 'display' : 'none')};
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
  width: 100%;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  border-radius: 8px;
  box-shadow: 0 0 24px rgb(0 0 0 / 8%);
  color: ${({ theme }) => theme.colors.base};
`;

export const EmptySearchResult = styled.div`
  color: ${({ theme }) => theme.colors.base};
  font-weight: 500;

  padding: 16px 8px;
`;

export const PopularSearches = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  border-top: 1px solid ${({ theme }) => theme.colors.greyLight};
`;

export const SearchesTitle = styled.div`
  color: ${({ theme }) => theme.colors.grayFaded};
  font-size: 11px;
  font-weight: 500;
  padding: 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const PopularSearchesItem = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.div`
  margin: 16px 0;
`;

export const TextFieldWrapper = styled.div<{ isMobile?: boolean }>`
  position: relative;
  cursor: initial;

  ${({ isMobile }) =>
    isMobile &&
    css`
      ${Results} {
        position: initial;
        top: auto;
        left: auto;
        padding: 24px 0;
        margin-top: 2px;

        box-shadow: none;
        border-radius: 0;
        border-width: 0;
      }

      ${EmptySearchResult} {
        margin-top: 20px;
      }

      ${PopularSearches} {
        border-top-width: 0;
      }
    `}
`;
