import styled from 'styled-components';

import { IconActionChevronDown } from '../../../Icons';

export const StyledHeader = styled.div<{ isRoot?: boolean }>`
  display: flex;
  align-items: center;
  font-size: ${({ isRoot }) => (isRoot ? '16px' : '14px')};
  font-weight: 500;
  line-height: 24px;
  gap: 15px;
`;
export const StyledContent = styled.div<{ isShown: boolean }>`
  display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
  padding: 8px 0 8px 31px;
  flex-direction: column;
  gap: 8px;
`;

export const StyledIcon = styled(IconActionChevronDown)<{ isRotated: boolean }>`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.sectionIcon};
  cursor: pointer;
  transform: rotate(${({ isRotated }) => (!isRotated ? '-90deg' : 0)});
  transition: transform 100ms;
`;
