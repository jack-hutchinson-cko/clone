/* eslint-disable react/no-danger */
import { FC } from 'react';

const NoticeableWidget: FC = () => (
  <>
    <script
      className="optanon-category-C0003"
      dangerouslySetInnerHTML={{
        __html: `!function(){'use strict';var e=['debug','destroy','do','help','identify','is','off','on','ready','render','reset','safe','set'];if(window.noticeable)console.warn('Noticeable SDK code snippet loaded more than once');else{var n=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}},t=window.noticeable=window.noticeable||[];!function(){for(var o=0;o<e.length;o++){var r=e[o];t[r]=n(r)}}(),function(){var e=document.createElement('script');e.async=!0,e.src='https://sdk.noticeable.io/l.js';var n=document.head;n.insertBefore(e,n.firstChild)}()}}();`,
      }}
    />
  </>
);

export default NoticeableWidget;
