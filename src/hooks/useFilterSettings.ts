import { useFlags } from 'launchdarkly-react-client-sdk';

const useFilterSettings = (): {
  filterSettings: string;
} => {
  const flags = useFlags();
  let filterSettings = '';

  if (!flags.docsIntegrationBuilderFrames) {
    filterSettings += 'NOT category: IBuilder';
  }

  return { filterSettings };
};

export default useFilterSettings;
