import { SectionListItem } from 'types/sectionList';
import {
  IconMyAccount,
  IconIntegration,
  IconPaymentsAndRefunds,
  IconReporting,
  IconRiskManagement,
  IconEcommerce,
} from 'components/Icons';

export const sectionList: SectionListItem[] = [
  {
    url: '/faq/my-account',
    title: 'My account',
    Icon: IconMyAccount,
  },
  {
    url: '/faq/integration',
    title: 'Integration',
    Icon: IconIntegration,
  },
  {
    url: '/faq/payments-and-refunds',
    title: 'Payments and refunds',
    Icon: IconPaymentsAndRefunds,
  },
  {
    url: '/faq/reporting',
    title: 'Reporting',
    Icon: IconReporting,
  },
  {
    url: '/faq/risk-management',
    title: 'Risk management',
    Icon: IconRiskManagement,
  },
  {
    url: '/faq/e-commerce-platforms',
    title: 'E-commerce platforms',
    Icon: IconEcommerce,
  },
];
