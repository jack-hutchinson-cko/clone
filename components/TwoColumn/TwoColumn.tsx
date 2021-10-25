import React, { FC } from 'react';
import { getDefaultSizeParams } from 'lib/layout';
import { Layout, Col } from './TwoColumn.styles';
import { ColumnSize, FullColumnSize, SizeByScreen } from './types';

type Props = {
  columSize?: ColumnSize;
  gap: number;
};

const getColumWidthByScreen = ({
  columSize: { mobile, tablet, desktop },
  index,
}: {
  columSize: FullColumnSize;
  index: number;
}): SizeByScreen => ({
  mobile: mobile[index] || 1,
  tablet: tablet[index] || 1,
  desktop: desktop[index] || 1,
});

const getHorizontalGap = ({ columItemSize, gap }: { columItemSize: number[]; gap: number }) =>
  columItemSize[0] + columItemSize[1] > 100 ? 0 : gap;

const getHorizontalGapByScreen = ({
  columSize: { mobile, tablet, desktop },
  gap,
}: {
  columSize: FullColumnSize;
  gap: number;
}): SizeByScreen => ({
  mobile: getHorizontalGap({ columItemSize: mobile, gap }),
  tablet: getHorizontalGap({ columItemSize: tablet, gap }),
  desktop: getHorizontalGap({ columItemSize: desktop, gap }),
});

const TwoColumn: FC<Props> = ({
  children,
  columSize: columSizeFromProps = { desktop: [50, 50], mobile: [100, 100] },
  gap,
}) => {
  const childrenArray = React.Children.toArray(children);

  const columSize = getDefaultSizeParams({
    dataBySize: columSizeFromProps,
    defaultValue: [1, 1],
  });

  const horizontalGapByScreen = getHorizontalGapByScreen({ columSize, gap });

  return (
    <Layout gap={gap}>
      {childrenArray.map((childItem, index) => {
        if (index > 1) {
          return null;
        }
        const columWidthByScreen = getColumWidthByScreen({ columSize, index });

        return (
          <Col
            columWidthByScreen={columWidthByScreen}
            horizontalGapByScreen={horizontalGapByScreen}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            {childItem}
          </Col>
        );
      })}
    </Layout>
  );
};

export default TwoColumn;
