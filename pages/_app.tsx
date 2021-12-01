import { NextPage } from 'next';
import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';

const MyApp: NextPage = () => {
  return (
      <div>hello</div>
  );
};

if (process.env.NODE_ENV !== 'development') {
  datadogLogs.init({
    clientToken: String(process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN),
    site: 'datadoghq.com',
    service: 'cko-docs',
    forwardErrorsToLogs: true,
    sampleRate: 100,
  });
  datadogRum.init({
    applicationId: String(process.env.NEXT_PUBLIC_RUM_APPLICATION_ID),
    clientToken: String(process.env.NEXT_PUBLIC_RUM_CLIENT_TOKEN),
    site: 'datadoghq.com',
    service: 'cko-docs',
    version: String(process.env.NEXT_PUBLIC_APP_VERSION),
    sampleRate: 100,
    trackInteractions: false,
  });
}

export default MyApp;
