import { FC } from 'react';

import {
  PoliciesList,
  PolicyEntity,
  PolicyLink,
  PolicyButton,
  PolicyEntityType,
} from 'types/footer';
import FooterLink from '../../FooterLink';
import { SubFooterList, SubFooterListItem } from './SubFooter.styles';

type Props = {
  policies: PoliciesList;
  isMobile: boolean;
};

const SubFooterLinks: FC<Props> = ({ policies, isMobile }) => {
  const mapContent = (entity: PolicyEntity<unknown>) => {
    if (entity.type === PolicyEntityType.BUTTON) {
      const { props } = entity as PolicyEntity<PolicyButton>;
      return <span {...props}>{entity.name}</span>;
    }
    const { link } = entity as PolicyEntity<PolicyLink>;
    return (
      <FooterLink href={link} underline external>
        {entity.name}
      </FooterLink>
    );
  };

  return (
    <SubFooterList isMobile={isMobile}>
      {policies.map((entity) => (
        <SubFooterListItem key={entity.name}>{mapContent(entity)}</SubFooterListItem>
      ))}
    </SubFooterList>
  );
};

export default SubFooterLinks;
