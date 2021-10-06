import { useEffect, useState } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';
import { clientSettings } from 'constants/clientSettings';
import { NavTreeElement } from 'types/navTree';
import { HeaderContent } from 'types/header';
import { FooterContent } from 'types/footer';
import { getHeaderContent } from 'lib/headerContent';
import { getFooterContent } from 'lib/footerContents';

const initHeaderContent = {
  guides: [],
  popularSearches: [],
  popularSearchesTitle: '',
  emptySearchResult: '',
  testAccountUrl: '',
  loginUrl: '',
};

const initFooterContent = {
  navigation: [],
  social: [],
  policies: [],
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

const useAppInitState = (): {
  sidebarDocLinks: NavTreeElement[];
  headerContent: HeaderContent;
  footerContent: FooterContent;
} => {
  const [tempDocLinks, setTempDocLinks] = useState<NavTreeElement[]>([]);
  const [sidebarDocLinks, setSidebarDocLinks] = useState<NavTreeElement[]>([]);
  const [headerContent, setHeaderContent] = useState<HeaderContent>(initHeaderContent);
  const [footerContent, setFooterContent] = useState<FooterContent>(initFooterContent);
  const { docsIntegrationBuilderFrames } = useFlags();

  const basePath = process.env.NEXT_PUBLIC_CLIENT_TYPE === 'ABC' ? '/docs' : '/docs/four';

  useEffect(() => {
    fetch(
      `${window.location.origin}${basePath}/api/docsTree?filePath=${clientSettings.docArticlesFilePath}`,
    )
      .then((response) => response.json())
      .then((result) => setTempDocLinks(result));

    getHeaderContent().then((result) => setHeaderContent(result));
    getFooterContent().then((result) => setFooterContent(result));
  }, []);

  useEffect(() => {
    if (!docsIntegrationBuilderFrames) {
      setSidebarDocLinks(removeNavBuilderElement(tempDocLinks));
    } else {
      setSidebarDocLinks(tempDocLinks);
    }
  }, [docsIntegrationBuilderFrames, tempDocLinks]);

  return { sidebarDocLinks, headerContent, footerContent };
};

export default useAppInitState;
