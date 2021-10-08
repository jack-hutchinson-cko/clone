import styled from 'styled-components';
import { IconActionLink } from '@cko/icons';

export const Anchor = styled.span<{ offsetTop: number }>`
  display: block;
  transform: translateY(-${({ offsetTop }) => offsetTop}px);
`;

export const LinkIcon = styled(IconActionLink)`
  g {
    fill: ${({ theme }) => theme.colors.base};
  }
`;

export const IconWrapper = styled.span`
  opacity: 0;
  white-space: nowrap;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  &:hover {
    ${IconWrapper} {
      opacity: 1;
    }
  }
`;

export const Title = styled.span<{ rightIndent?: number }>`
  cursor: pointer;
  margin-right: ${({ rightIndent }) => rightIndent ?? 20}px;
`;
