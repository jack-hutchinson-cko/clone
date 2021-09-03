import styled from 'styled-components';
import { IconActionCopy } from 'components/Icons';

export const StyledLineCodeWrapper = styled.div`
  display: flex;
  padding: 15px;
  color: ${({ theme }) => theme.colors.base};
  background-color: ${({ theme }) => theme.colors.codeLabelBackground};
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;
  white-space: nowrap;
  overflow: auto;

  div,
  p {
    padding: 0;
    margin: 0;
    align-self: center;
  }
`;

export const IconsContainer = styled.span`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 10px;
`;

export const StyledIconActionCopy = styled(IconActionCopy)`
  opacity: 0;
  transition: opacity 1s ease;
`;

export const Wrapper = styled.div`
  position: relative;
  &:hover {
    ${StyledIconActionCopy} {
      opacity: 1;
    }
  }
`;
