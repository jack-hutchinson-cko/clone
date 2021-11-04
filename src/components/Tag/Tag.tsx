import { FC } from 'react';
import { StyledRequestTag } from './RequestTag';
import { StyledTypeTag } from './TypeTag';
import { StyledStatusTag } from './StatusTag';
import SectionTagWrapper from './SectionTag';
import { StatusTagWrapper } from './StatusTag/StatusTag.styles';
import {
  RequestTagProps,
  StatusTagProps,
  TagWrapperProps,
  TypeTagProps,
  SectionTagProps,
} from './types';

const Tag: FC<TagWrapperProps> = ({ type, variant }) => {
  let StyledWrapper;

  switch (variant) {
    case 'request':
      StyledWrapper = StyledRequestTag;
      break;

    case 'status':
      StyledWrapper = StyledStatusTag;
      break;

    case 'type':
    default:
      StyledWrapper = StyledTypeTag;
  }

  return <StyledWrapper type={type}>{type}</StyledWrapper>;
};

export const RequestTag: FC<RequestTagProps> = (props) => {
  return <Tag {...props} variant="request" />;
};

export const StatusTag: FC<StatusTagProps> = ({ display = 'block', ...props }) => {
  return (
    <StatusTagWrapper display={display}>
      <Tag {...props} variant="status" />
    </StatusTagWrapper>
  );
};

export const TypeTag: FC<TypeTagProps> = (props) => {
  return (
    <div>
      <Tag {...props} variant="type" />
    </div>
  );
};

export const SectionTag: FC<SectionTagProps> = (props) => {
  return <SectionTagWrapper {...props} />;
};
