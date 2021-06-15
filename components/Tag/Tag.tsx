import { FC } from 'react';
import { StyledRequestTag } from './RequestTag';
import { StyledTypeTag } from './TypeTag';
import { StyledStatusTag } from './StatusTag';
import { RequestTagProps, StatusTagProps, TagWrapperProps, TypeTagProps } from './types';

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

export const StatusTag: FC<StatusTagProps> = (props) => {
  return (
    <div>
      <Tag {...props} variant="status" />
    </div>
  );
};

export const TypeTag: FC<TypeTagProps> = (props) => {
  return (
    <div>
      <Tag {...props} variant="type" />
    </div>
  );
};
