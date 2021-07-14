import { TextFieldBase } from '@cko/primitives';
import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';
import { CrossSearch } from 'components/Icons';

export const TextFieldHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueLight};
  }

  svg {
    color: ${({ theme }) => theme.colors.base} !important;
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    margin: 40px 40px 2px 40px;
    padding: 18px 24px;
  }

  @media ${MobileBreakPoints.MOBILE_M} {
    margin: 24px 24px 2px 24px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    margin: 24px 24px 2px 24px;
  }
`;

export const TextField = styled(TextFieldBase)`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderSearch};
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 32px;
  }

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 18px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 18px;
  }
`;

export const CrossSearchIcon = styled(CrossSearch)`
  cursor: pointer;
`;
