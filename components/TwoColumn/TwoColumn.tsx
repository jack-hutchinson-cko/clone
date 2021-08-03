import React, { FC } from 'react';
import { useMatchMedia } from '@cko/primitives';
import { Breakpoints } from 'constants/screen';
import { getDataBySize } from 'lib/layout';
import { Layout, Col } from './TwoColumn.styles';

type ColumnSize = {
  desktop?: [number, number];
  tablet?: [number, number];
  mobile?: [number, number];
};

type Props = {
  columSize?: ColumnSize;
  gap: number;
};

const TwoColumn: FC<Props> = ({
  children,
  columSize = { desktop: [50, 50], mobile: [100, 100] },
  gap,
}) => {
  const childrenArray = React.Children.toArray(children);
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const isTablet = useMatchMedia(Breakpoints.TABLET);

  const columnSize = getDataBySize({
    dataBySize: columSize,
    isMobile,
    isTablet,
    defaultValue: [1, 1],
  });
  const horizontalGap = columnSize[0] + columnSize[1] > 100 ? 0 : gap;

  return (
    <Layout gap={gap}>
      {childrenArray.map((childItem, index) => {
        if (index > 1) {
          return null;
        }

        return (
          // eslint-disable-next-line react/no-array-index-key
          <Col width={columnSize[index]} horizontalGap={horizontalGap} key={index}>
            {childItem}
          </Col>
        );
      })}
    </Layout>
  );
};

export default TwoColumn;
