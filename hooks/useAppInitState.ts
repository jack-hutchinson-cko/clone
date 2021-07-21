import { useEffect, useState } from 'react';
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

const patch = 'docs/ABC';

const useAppInitState = (): {
  sidebarDocLinks: NavTreeElement[];
  headerContent: HeaderContent;
  footerContent: FooterContent;
} => {
  const [sidebarDocLinks, setSidebarDocLinks] = useState<NavTreeElement[]>([]);
  const [headerContent, setHeaderContent] = useState<HeaderContent>(initHeaderContent);
  const [footerContent, setFooterContent] = useState<FooterContent>(initFooterContent);

  useEffect(() => {
    fetch(`${window.location.origin}/api/docsTree?filePath=${clientSettings.docArticlesFilePath}`)
      .then((response) => response.json())
      .then((result) => setSidebarDocLinks(result));

    getHeaderContent().then((result) => setHeaderContent(result));
    getFooterContent().then((result) => setFooterContent(result));
  }, []);

  return { sidebarDocLinks, headerContent, footerContent };
};

export default useAppInitState;
