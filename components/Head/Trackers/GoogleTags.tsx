import { FC } from 'react';

type Props = {
  id?: string;
};

const GoogleTags: FC<Props> = ({ id }) => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    <script
      className="optanon-category-C0002"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
);

export default GoogleTags;
