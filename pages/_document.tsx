/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { basePathAddition } from 'tools/basePathAddition';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const isNAS = process.env.NEXT_PUBLIC_CLIENT_TYPE === 'NAS';

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {isNAS && <meta name="robots" content="noindex nofollow" />}
          <meta name="description" content="Checkout.com documentation" />
          <link
            rel="preload"
            href={basePathAddition('/assets/fonts/Graphik-Light-Cy-Gr-Web.woff2')}
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={basePathAddition('/assets/fonts/Graphik-Regular-Web.woff2')}
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={basePathAddition('/assets/fonts/Graphik-Medium-Web.woff2')}
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={basePathAddition('/assets/fonts/Graphik-Semibold-Cy-Gr-Web.woff2')}
            as="font"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href={basePathAddition('/assets/fonts/add.css')} />
          <link rel="shortcut icon" href={basePathAddition('/favicons/favicon.ico')} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={basePathAddition('/favicons/apple-touch-icon-180x180.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={basePathAddition('/favicons/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={basePathAddition('/favicons/favicon-16x16.png')}
          />
          <link
            rel="mask-icon"
            href={basePathAddition('/favicons/favicon.32.safari.svg')}
            color="#00122C"
          />
          <link rel="shortcut icon" href={basePathAddition('/favicons/favicon.ico')} />
          <meta name="msapplication-TileColor" content="#00122C" />
          <meta
            name="msapplication-config"
            content="https://www.checkout.com/favicons/browserconfig.xml"
          />

          <script async src="https://cdn.checkout.com/js/framesv2.min.js" />

          {/* One Trust */}
          <script
            defer
            type="text/javascript"
            src={`https://cdn-ukwest.onetrust.com/consent/${process.env.NEXT_PUBLIC_ONE_TRUST_ID}/OtAutoBlock.js`}
          />
          <script
            defer
            src="https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js"
            data-language="en"
            type="text/javascript"
            charSet="UTF-8"
            data-domain-script={process.env.NEXT_PUBLIC_ONE_TRUST_ID}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `function OptanonWrapper() {}`,
            }}
          />

          {/* Boomerang */}
          <script
            defer
            type="text/plain"
            className="optanon-category-C0003"
            dangerouslySetInnerHTML={{
              __html: `(function(){if(window.BOOMR&&(window.BOOMR.version||window.BOOMR.snippetExecuted)){return}window.BOOMR=window.BOOMR||{};window.BOOMR.snippetStart=(new Date).getTime();window.BOOMR.snippetExecuted=true;window.BOOMR.snippetVersion=14;window.BOOMR.url="//c.go-mpulse.net/boomerang/${process.env.NEXT_PUBLIC_BOOMERANG_ID}";var e=document.currentScript||document.getElementsByTagName("script")[0],a=e.parentNode,s=false,t=3e3;function n(){if(s){return}var e=document.createElement("script");e.id="boomr-scr-as";e.src=window.BOOMR.url;e.async=true;a.appendChild(e);s=true}function o(e){s=true;var t,o=document,n,i,d,r=window;window.BOOMR.snippetMethod=e?"if":"i";n=function(e,t){var n=o.createElement("script");n.id=t||"boomr-if-as";n.src=window.BOOMR.url;BOOMR_lstart=(new Date).getTime();e=e||o.body;e.appendChild(n)};if(!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\\./)){window.BOOMR.snippetMethod="s";n(a,"boomr-async");return}i=document.createElement("IFRAME");i.src="about:blank";i.title="";i.role="presentation";i.loading="eager";d=(i.frameElement||i).style;d.width=0;d.height=0;d.border=0;d.display="none";a.appendChild(i);try{r=i.contentWindow;o=r.document.open()}catch(e){t=document.domain;i.src="javascript:var d=document.open();d.domain='"+t+"';void 0;";r=i.contentWindow;o=r.document.open()}if(t){o._boomrl=function(){this.domain=t;n()};o.write("<bo"+"dy onload='document._boomrl();'>")}else{r._boomrl=function(){n()};if(r.addEventListener){r.addEventListener("load",r._boomrl,false)}else if(r.attachEvent){r.attachEvent("onload",r._boomrl)}}o.close()}var i=document.createElement("link");if(i.relList&&typeof i.relList.supports==="function"&&i.relList.supports("preload")&&"as"in i){window.BOOMR.snippetMethod="p";i.href=window.BOOMR.url;i.rel="preload";i.as="script";i.addEventListener("load",n);i.addEventListener("error",function(){o(true)});setTimeout(function(){if(!s){o(true)}},t);BOOMR_lstart=(new Date).getTime();a.appendChild(i)}else{o(false)}function d(e){window.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(window.addEventListener){window.addEventListener("load",d,false)}else if(window.attachEvent){window.attachEvent("onload",d)}})();`,
            }}
          />

          {/* Google Tags */}
          <script
            async
            type="text/plain"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
          <script
            defer
            type="text/plain"
            className="optanon-category-C0002"
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
            }}
          />

          {/* Heap IO */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                defer
                className="optanon-category-C0002"
                type="text/plain"
                dangerouslySetInnerHTML={{
                  __html: `
                  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
                  heap.load("${process.env.NEXT_PUBLIC_HEAP_IO_ID}", {
                      secureCookie: true
                  });
                  heap.addUserProperties({ Account: '${process.env.NEXT_PUBLIC_HEAP_IO_ACCOUNT}' });
              `,
                }}
              />
              <script
                defer
                type="text/plain"
                className="optanon-category-C0002"
                dangerouslySetInnerHTML={{
                  __html: `
                  (function() {
                    var quarters = 0;
                    var scrollHeight, quarterHeight, scrollDistance, divisible, scrollPercent;
                    document.addEventListener("scroll", function() {
                        scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                        quarterHeight = scrollHeight / 4;
                        scrollDistance = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                        divisible = Math.trunc(scrollDistance / quarterHeight);
                        if (quarters < divisible && divisible !== Infinity) {
                            scrollPercent = divisible * 25;
                            heap.track('Scroll Depth', {
                                percent: scrollPercent
                            });
                            quarters++;
                        }
                    });
                }());
              `,
                }}
              />
            </>
          )}

          {/* Noticeable */}
          <script
            type="text/plain"
            className="optanon-category-C0002"
            dangerouslySetInnerHTML={{
              __html: `!function(){'use strict';var e=['debug','destroy','do','help','identify','is','off','on','ready','render','reset','safe','set'];if(window.noticeable)console.warn('Noticeable SDK code snippet loaded more than once');else{var n=window.noticeable=window.noticeable||[];function t(e){return function(){var t=Array.prototype.slice.call(arguments);return t.unshift(e),n.push(t),n}}function o(){for(var o=0;o<e.length;o++){var r=e[o];n[r]=t(r)}}; o()}}();`,
            }}
          />

          <script
            type="text/plain"
            className="optanon-category-C0002"
            src="https://sdk.noticeable.io/l.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
