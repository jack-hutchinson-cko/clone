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

export const IntroWrapper = styled(Flex)`
  justify-content: space-between;
`;

export const ContentBlock = styled(Box)`
  flex: 0 0 50%;
`;
export const IntroTitle = styled(PrimitivesTextHeadingOne)`
  letter-spacing: 0.02em;
  word-spacing: 0.02em;
  line-height: 48px;
`;
export const IntroDescription = styled(Text)`
  margin: 30px 0 0;
`;
export const GetStartedLink = styled(PrimaryButton)`
  margin-top: 30px;
  padding: 15px 24px;
  font-weight: 500;
`;
export const BlocksWrapper = styled(Flex)`
  justify-content: space-between;
  padding-top: 60px;
`;
export const BlockTitle = styled(TextHeadingTwo)`
  margin: 20px 0 0;
`;
export const BlockDescription = styled(Text)`
  padding: 10px 0 20px;
`;
export const BlockList = styled(List)`
  & li {
    padding: 5px 0;
    font-weight: 500;
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
`;
