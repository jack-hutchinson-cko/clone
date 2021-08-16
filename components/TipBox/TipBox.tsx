import { FC } from 'react';
import { IconApprove, IconInfo, IconNote, IconWarning } from '../Icons';
import { TipBoxWrapper, TipBoxIcon, TipBoxHeader, TipBoxContent } from './TipBox.styles';
import { TipBoxProps, TipBoxVariant } from './types';

const TipBox: FC<TipBoxProps> = ({ title = null, variant = 'tip', children, ...rest }) => {
  const getTipBoxIcon = (variantName: TipBoxVariant) => {
    switch (variantName) {
      case 'info':
        return <IconInfo />;

      case 'warning':
        return <IconWarning />;

      case 'note':
        return <IconNote />;

      case 'tip':
      default:
        return <IconApprove />;
    }
  };

  return (
    <TipBoxWrapper variant={variant} {...rest}>
      <TipBoxIcon variant={variant}>{getTipBoxIcon(variant)}</TipBoxIcon>
      {title && <TipBoxHeader>{title}</TipBoxHeader>}
      <TipBoxContent>{children}</TipBoxContent>
    </TipBoxWrapper>
  );
};

export default TipBox;
