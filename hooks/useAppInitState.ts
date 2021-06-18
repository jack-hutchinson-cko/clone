import { useEffect, useState } from 'react';
import { NavTreeElement } from 'types/navTree';
import { HeaderContent } from 'types/header';
import { getHeaderContent } from 'lib/headerContent';

const initHeaderContent = {
  guides: [],
  popularSearches: [],
  popularSearchesTitle: '',
  emptySearchResult: '',
  testAccountUrl: '',
  loginUrl: '',
};

const useAppInitState = (): {
  sidebarDocLinks: NavTreeElement[];
  headerContent: HeaderContent;
} => {
  const [sidebarDocLinks, setSidebarDocLinks] = useState<NavTreeElement[]>([]);
  const [headerContent, setHeaderContent] = useState<HeaderContent>(initHeaderContent);
  useEffect(() => {
    fetch(`${window.location.origin}/api/docsTree`)
      .then((response) => response.json())
      .then((result) => setSidebarDocLinks(result));

    getHeaderContent().then((result) => setHeaderContent(result));
  }, []);

  return { sidebarDocLinks, headerContent };
};

export default useAppInitState;
