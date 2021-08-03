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
    right: -24px;
    bottom: 50%;
    transform: translateY(50%);

    visibility: hidden;
    cursor: pointer;
  }

  &:hover {
    ${LinkIcon} {
      visibility: visible;
    }
  }
`;

export const Title = styled.span`
  position: relative;
`;
