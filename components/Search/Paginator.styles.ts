import styled from 'styled-components';
import { IconActionArrowRight } from 'components/Icons';

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.border} !important;
  padding-top: 36px;
  margin: 24px 16px 0px 16px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  & > a {
    text-decoration: none;
    font-size: 14px;
    padding: 0 8px;
    color: ${({ theme }) => theme.colors.successDark};
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ArrowLeft = styled(IconActionArrowRight)`
  transform: rotate(180deg);
`;

export const ArrowRight = styled(IconActionArrowRight)``;
