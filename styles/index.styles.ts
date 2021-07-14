import styled from 'styled-components';
import {
  Flex,
  Box,
  PrimaryButton,
  TextHeadingOne as PrimitivesTextHeadingOne,
  TextHeadingTwo,
  Text,
  List,
  Link as PrimitiveLink,
} from '@cko/primitives';
import { TextHeadingOne } from 'components/TextHeading';
import { SIZE } from 'constants/screen';

export const IntroWrapper = styled(Flex)`
  justify-content: space-between;
`;

export const ContentBlock = styled(Box)`
  flex: 0 0 50%;
`;

export const IntroTitle = styled(PrimitivesTextHeadingOne)`
  color: ${({ theme }) => theme.colors.base};
  letter-spacing: 0.02em;
  word-spacing: 0.02em;
  line-height: 48px;
`;

export const IntroDescription = styled(Text)`
  margin: 30px 0 0;
  color: ${({ theme }) => theme.colors.baseLight};
`;

export const GetStartedLink = styled(PrimaryButton)`
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.btnPrimaryBackground};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.btnPrimaryFont};
  background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};

  &:hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.btnPrimaryBackground};
    color: ${({ theme }) => theme.colors.btnPrimaryFont};
    background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
    box-shadow: inherit;
  }
`;

export const BlocksWrapper = styled(Flex)`
  justify-content: space-between;
  padding-top: 60px;
`;

export const BlockTitle = styled(TextHeadingTwo)`
  color: ${({ theme }) => theme.colors.base};
  margin: 20px 0 0;
`;

export const BlockDescription = styled(Text)`
  padding: 10px 0 20px;
  color: ${({ theme }) => theme.colors.baseLight};
`;

export const BlockList = styled(List)`
  & li {
    padding: 5px 0;
    font-weight: 500;
    a {
      color: ${({ theme }) => theme.colors.base};
    }
  }
`;

export const BlockLink = styled(PrimitiveLink)`
  cursor: pointer;
  & svg {
    margin-left: 8px;
  }
  &:hover svg {
    transform: translateX(40%);
    transition: transform 0.15s linear 0s;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
`;

export const Content = styled.article`
  flex-grow: 1;
  overflow-x: hidden;
`;

export const PageContent = styled.main`
  padding: 32px 26px 64px 26px;
  flex-grow: 1;
  overflow-x: hidden;
`;

export const Title = styled(TextHeadingOne)`
  margin-top: 32px;
`;

export const Navigation = styled.div`
  flex-grow: 0;
  width: 230px;
  min-width: 230px;
  position: sticky;
  height: 100%;
  top: 110px;
  padding: 0 26px 0 26px;
  box-sizing: content-box;

  @media (max-width: ${SIZE.XL}px) {
    display: none;
  }
`;
