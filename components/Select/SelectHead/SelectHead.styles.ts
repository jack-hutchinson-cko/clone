import styled from 'styled-components';
import { IconActionChevronDown } from 'components/Icons';

export const StyledSelectHead = styled.div`
  position: relative;
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  width: 245px;
  padding: 12px 16px;
  margin-left: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.errorPageLinkBorder};
  color: ${({ theme }) => theme.colors.base};
`;

export const IconChevronDown = styled(IconActionChevronDown)`
  position: absolute;
  left: 230px;
  top: 16px;
  pointer-events: none;
`;
