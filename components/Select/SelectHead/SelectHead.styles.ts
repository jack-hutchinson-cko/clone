import styled from 'styled-components';
import { IconActionChevronDown } from 'components/Icons';
import { spacing } from 'constants/spacingSize';

export const StyledSelectHead = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  width: 245px;
  padding: ${spacing.s30}px ${spacing.s40}px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.errorPageLinkBorder};
  color: ${({ theme }) => theme.colors.base};
  margin-bottom: ${spacing.s30}px;
`;

export const IconChevronDown = styled(IconActionChevronDown)`
  position: absolute;
  right: 16px;
  top: 16px;
  pointer-events: none;
`;
