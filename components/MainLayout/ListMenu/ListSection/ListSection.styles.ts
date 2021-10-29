import styled from 'styled-components';

import { IconActionChevronDown } from 'components/Icons';

export const StyledHeader = styled.div<{ isRoot?: boolean }>`
  position: relative;
  font-size: ${({ isRoot }) => (isRoot ? '16px' : '14px')};
  font-weight: 500;
  line-height: 24px;
  padding-left: 30px;
`;
export const StyledContent = styled.div<{ isShown: boolean }>`
  display: ${({ isShown }) => (isShown ? 'flex' : 'none')};
  padding: 8px 0 8px 25px;
  flex-direction: column;
  gap: 8px;
`;

export const StyledIcon = styled(IconActionChevronDown)<{ isRotated: boolean }>`
  color: ${({ theme }) => theme.colors.sectionIcon};
  cursor: pointer;
  transform: rotate(${({ isRotated }) => (!isRotated ? '-90deg' : 0)});
  transition: transform 100ms;
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: -2px;
  height: 100%;
`;
