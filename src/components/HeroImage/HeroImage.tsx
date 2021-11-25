import { FC, MouseEvent, useState } from 'react';
import Image from 'next/image';
import { withResizeDetector } from 'react-resize-detector';
import { basePathLoader } from '../ImageBox';

import { HeroWrapper, HeroParts, HeroPart01, HeroPart02, HeroPart03 } from './HeroImage.styles';

type HeroImageProps = {
  width?: number;
  height?: number;
};

type TransformProps = {
  rotateX: number;
  rotateY: number;
};

const constrain = 45;

const calcRotation = (target: HTMLDivElement, x: number, y: number): TransformProps => {
  const boundingBox = target.getBoundingClientRect();
  const horizontalAxis = (x - boundingBox.left) / boundingBox.width;
  const verticalAxis = (y - boundingBox.top) / boundingBox.height;
  const normalizeX = Math.min(Math.max(horizontalAxis, 0), 1);
  const normalizeY = Math.min(Math.max(verticalAxis, 0), 1);

  return {
    rotateX: Number((constrain / 2 - normalizeX * constrain).toFixed(2)) / 10,
    rotateY: Number((normalizeY * constrain - constrain / 2).toFixed(2)) / 10,
  };
};

const HeroImage: FC<HeroImageProps> = () => {
  const [isCursorEntered, setCursorStatus] = useState<boolean>(false);
  const [transform, setTransform] = useState<TransformProps>({ rotateX: 0, rotateY: 0 });

  const onMouseEnterHandler = () => setCursorStatus(true);

  const onMouseLeaveHandler = () => {
    setCursorStatus(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  const onMouseMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    const [x, y] = [event.nativeEvent.clientX, event.nativeEvent.clientY];
    const { rotateX, rotateY } = calcRotation(event.currentTarget, x, y);

    setTransform({ rotateX, rotateY });
  };

  const dynamicTransform = {
    transform: `perspective(1000px) rotateX(${transform.rotateY}deg) rotateY(${transform.rotateX}deg) scale3d(1.02, 1.02, 1.02)`,
  };

  return (
    <HeroWrapper>
      <Image
        src="/assets/images/HeroImg/hero.home.bg.svg"
        layout="fill"
        loader={basePathLoader}
        alt="Checkout.com hero image"
        priority
      />
      <HeroParts
        style={isCursorEntered ? dynamicTransform : {}}
        onMouseEnter={onMouseEnterHandler}
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <HeroPart01>
          <Image
            src="/assets/images/HeroImg/hero.home.el.01.svg"
            width="389"
            height="328"
            loader={basePathLoader}
            alt="Checkout.com hero body"
            priority
          />
        </HeroPart01>
        <HeroPart02>
          <Image
            src="/assets/images/HeroImg/hero.home.el.02.svg"
            width="236"
            height="347"
            loader={basePathLoader}
            alt="Checkout.com hero panel"
          />
        </HeroPart02>
        <HeroPart03>
          <Image
            src="/assets/images/HeroImg/hero.home.el.03.svg"
            width="289"
            height="153"
            loader={basePathLoader}
            alt="Checkout.com hero 3d secure label"
            priority
          />
        </HeroPart03>
      </HeroParts>
    </HeroWrapper>
  );
};

export default withResizeDetector(HeroImage);
