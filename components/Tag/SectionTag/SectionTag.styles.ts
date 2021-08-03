import styled from 'styled-components';

export const StyledSectionTag = styled.span`
  display: inline-block;
  padding: 0 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.sectionTag};

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    text-decoration: none;
    text-align: center;
    line-height: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
