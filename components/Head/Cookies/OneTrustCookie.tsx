import { FC } from 'react';

type Props = {
  id?: string;
};

const OneTrustCookie: FC<Props> = ({ id }) => {
  return (
    <>
      {/* TODO This script leads to the errors in <image> component when a page with images is initialised
        <script
          defer
          type="text/javascript"
          src={`https://cdn-ukwest.onetrust.com/consent/${id}/OtAutoBlock.js`}
        />
      */}
      <script
        defer
        src="https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js"
        data-language="en"
        type="text/javascript"
        charSet="UTF-8"
        data-domain-script={id}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `function OptanonWrapper() {}`,
        }}
      />
    </>
  );
};

export default OneTrustCookie;