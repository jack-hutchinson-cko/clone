import { FC } from 'react';

type Props = {
  id?: string;
  account?: string;
};

const HeapIO: FC<Props> = ({ id, account }) => (
  <>
    <script
      className="optanon-category-C0002"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
            window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
            heap.load("${id}", {
                secureCookie: true
            });
            heap.addUserProperties({ Account: '${account}' });
        `,
      }}
    />
    <script
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
);

export default HeapIO;
