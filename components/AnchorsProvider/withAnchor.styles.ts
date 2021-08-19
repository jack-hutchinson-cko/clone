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

export const Wrapper = styled.div`
  padding-right: 24px;

  ${LinkIcon} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    visibility: hidden;
  }
`;

export const Title = styled.span`
  position: relative;
  padding-right: 24px;
  cursor: pointer;

  &:hover {
    ${LinkIcon} {
      visibility: visible;
    }
  }
`;
