import { FC } from 'react';

import IBuilderPreview from './IBuilderPreview';

const getSrcDoc = ({
  indexFile,
  codeMap,
}: {
  codeMap: { [key: string]: string };
  indexFile: string;
}) => {
  const htmlFile = codeMap[indexFile] || '';

  const headReg = RegExp(/<head.*?>(.|\n)*?<\/head>/g);
  const scriptTag = RegExp(/<\s*script[^>]*((>\s*(.*?)\s*<\/\s*script>)|(\/>))/g);
  const linkTag = RegExp(/<\s*link[^>]*((>\s*(.*?)\s*<\/\s*link>)|(\/>))/g);

  return htmlFile.replace(headReg, (head: string) => {
    return head
      .replace(scriptTag, (script) => {
        const srcProperty = RegExp(/src="([^"]+)"/g);
        const jsSource = (srcProperty.exec(script) || [])[1];
        const jsSourceCode = codeMap[jsSource];

        if (jsSourceCode) {
          return `\n<script type="text/javascript">\nwindow.addEventListener('DOMContentLoaded', function() {\n\n${jsSourceCode}\n\n});\n</script>\n`;
        }

        return script;
      })
      .replace(linkTag, (styleTag) => {
        const hrefProperty = RegExp(/href="([^"]+)"/g);
        const styleSource = (hrefProperty.exec(styleTag) || [])[1];
        const styleSourceCode = codeMap[styleSource];

        if (styleSourceCode) {
          return `\n<style type="text/css">\n\n${styleSourceCode}\n\n</style>\n`;
        }

        return styleTag;
      });
  });
};

type Props = {
  codeMap: { [key: string]: string };
  indexFile: string;
  width?: number;
  height?: number;
};

const IBuilderCodePreview: FC<Props> = ({ codeMap, indexFile, width = 340, height = 300 }) => {
  const srcDoc = getSrcDoc({ indexFile, codeMap });

  return (
    <IBuilderPreview>
      {srcDoc ? (
        <iframe
          width={width}
          frameBorder={0}
          height={height}
          title="code preview"
          srcDoc={srcDoc}
        />
      ) : (
        'No preview available'
      )}
    </IBuilderPreview>
  );
};

IBuilderCodePreview.displayName = 'IBuilderCodePreview';

export default IBuilderCodePreview;
