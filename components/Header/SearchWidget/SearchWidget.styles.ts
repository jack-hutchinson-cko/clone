import { TextFieldBase } from '@cko/primitives';
import styled, { css } from 'styled-components';

import { IconSearch } from 'components/Icons';

export const TextFieldHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  box-sizing: border-box;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueLight};
  }
`;

export const TextField = styled(TextFieldBase)`
  width: 100%;
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.base};
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
`;

export const SearchActionIcon = styled(IconSearch)``;

export const Results = styled.div<{ isShown: boolean }>`
  display: ${({ isShown }) => (isShown ? 'display' : 'none')};
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
  width: 100%;
  padding: 24px 16px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  border-radius: 8px;
  box-shadow: 0 0 24px rgb(0 0 0 / 8%);
  color: ${({ theme }) => theme.colors.base};
`;

export const EmptySearchResult = styled.div`
  color: ${({ theme }) => theme.colors.base};
  font-weight: 500;
  padding: 0 8px;
`;

export const PopularSearches = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  border-top: 1px solid ${({ theme }) => theme.colors.greyLight};
`;

export const PopularSearchesTitle = styled.div`
  color: ${({ theme }) => theme.colors.grayFaded};
  font-size: 11px;
  font-weight: 500;
  padding-top: 24px;
  padding-bottom: 8px;
  text-transform: uppercase;
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

export const TextFieldWrapper = styled.div<{ isMobile?: boolean }>`
  position: relative;
  cursor: initial;

  ${({ isMobile }) =>
    isMobile &&
    css`
      ${TextField} {
        font-size: 24px;
      }

      ${TextFieldHolder} {
        padding: 12px 24px;
      }

      ${SearchActionIcon} {
        width: 26px;
        height: 26px;
      }

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
