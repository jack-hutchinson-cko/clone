import { FC, ReactNode } from 'react';

import ExtraLinks, { ExtraItem } from './ExtraLinks';

type Props = {
  headerTitle: ReactNode;
  headerDescription: string;
  footerTitle: ReactNode;
  extraContent: ReactNode;
  footerExtraContent: ReactNode;
};

const SignInLinks: FC<Props> = ({
  headerTitle,
  headerDescription,
  footerTitle,
  extraContent,
  footerExtraContent,
}) => {
  return (
    <ExtraLinks footerChildren={<ExtraItem title={headerTitle}>{footerExtraContent}</ExtraItem>}>
      <ExtraItem title={footerTitle}>
        {headerDescription}
        {extraContent}
      </ExtraItem>
    </ExtraLinks>
  );
};

export default SignInLinks;
