import styled from 'styled-components';
import { TextHeadingFour } from 'components/TextHeading';

export const MainWrapper = styled.div<{ isSelected?: boolean }>`
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.codeLabelBackground : 'transparent'};
  border-left: 4px solid
    ${({ theme, isSelected }) => (isSelected ? `${theme.colors.base}` : 'transparent')};
  cursor: pointer;
  padding: 1px 24px;
  margin: 0 -24px;
`;

export const TextHeadFour = styled(TextHeadingFour)`
  font-size: 16px;
  margin: 24px 0;
`;

export const HighlightLinesWrapper = styled.div`
  height: 24px;
  width: 82px;
  min-width: 82px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.grayFaded};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 8px;
  top: 8px;
`;
