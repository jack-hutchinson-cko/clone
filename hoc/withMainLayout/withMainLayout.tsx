import { FC, useMemo } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import { NavTreeElement } from 'types/navTree';
import { headerContent } from 'constants/headerContent';
import MainLayout from 'components/MainLayout';
import { footerContent } from 'constants/footerContents';

export type WithMainLayoutProps = {
  isFAQSection?: boolean;
  sidebarDocLinks?: NavTreeElement[];
};

const removeNavBuilderElement = (navTree: NavTreeElement[]): NavTreeElement[] => {
  return navTree.reduce((accNavTree, navTreeItem) => {
    if (navTreeItem.type !== 'IBuilder') {
      if (navTreeItem.children && navTreeItem.children.length > 0) {
        return [
          ...accNavTree,
          { ...navTreeItem, children: removeNavBuilderElement(navTreeItem.children) },
        ];
      }
      return [...accNavTree, navTreeItem];
    }
    return accNavTree;
  }, [] as NavTreeElement[]);
};

const filterNavItems = ({
  sidebarDocLinks,
  isIntegrationBuilderVisible,
}: {
  sidebarDocLinks: NavTreeElement[];
  isIntegrationBuilderVisible: boolean;
}) => {
  if (isIntegrationBuilderVisible) {
    return sidebarDocLinks;
  }

  return removeNavBuilderElement(sidebarDocLinks);
};

const withMainLayout = <T,>(
  Component: FC<T>,
  { isFAQSection = false }: { isFAQSection?: boolean } = {},
): FC<WithMainLayoutProps & T> => {
  return (props) => {
    const { sidebarDocLinks = [] } = props as WithMainLayoutProps;
    const { docsIntegrationBuilderFrames = false } = useFlags();
    const isIntegrationBuilderVisible = docsIntegrationBuilderFrames;
    const resultNavTreeLinks = useMemo(
      () =>
        filterNavItems({
          sidebarDocLinks,
          isIntegrationBuilderVisible,
        }),
      [isIntegrationBuilderVisible, sidebarDocLinks],
    );

    return (
      <MainLayout
        navTreeLinks={resultNavTreeLinks}
        headerContent={headerContent}
        footerContent={footerContent}
        isFAQSection={isFAQSection}
      >
        <Component {...props} />
      </MainLayout>
    );
  };
};

export default withMainLayout;
