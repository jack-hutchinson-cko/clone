import { FC, MouseEvent, useState, useEffect } from 'react';
import Image from 'next/image';
import { basePathLoader } from '../ImageBox';

import { HeroWrapper, HeroParts, HeroPart01, HeroPart02, HeroPart03 } from './HeroImage.styles';

type TransformProps = {
  rotateX: number;
  rotateY: number;
};

const constrain = 45;

const defaultTransform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

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

const HeroImage: FC = () => {
  const [transform, setTransform] = useState<string>(defaultTransform);
  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  const onMouseHandler = () => {
    setTransform(defaultTransform);
  };

  const onMouseMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    const [x, y] = [event.nativeEvent.clientX, event.nativeEvent.clientY];

    const { rotateX, rotateY } = calcRotation(event.currentTarget, x, y);
    setTransform(
      `perspective(1000px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1.03, 1.03, 1.03)`,
    );
  };

  return (
    <HeroWrapper>
      <Image src="/assets/images/HeroImg/hero.home.bg.svg" layout="fill" loader={basePathLoader} />
      <HeroParts
        transform={transform}
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseHandler}
        opacity={opacity}
      >
        <HeroPart01>
          <Image
            src="/assets/images/HeroImg/hero.home.el.01.svg"
            width="397"
            height="300"
            loader={basePathLoader}
          />
        </HeroPart01>
        <HeroPart02>
          <Image
            src="/assets/images/HeroImg/hero.home.el.02.svg"
            width="200"
            height="356"
            loader={basePathLoader}
          />
        </HeroPart02>
        <HeroPart03>
          <Image
            src="/assets/images/HeroImg/hero.home.el.03.svg"
            width="204"
            height="145"
            loader={basePathLoader}
          />
        </HeroPart03>
      </HeroParts>
    </HeroWrapper>
  );
};

export default HeroImage;
