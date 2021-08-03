import { FC, MouseEvent, useState, useRef } from 'react';
import Image from 'next/image';

import { HeroWrapper, HeroParts, HeroPart01, HeroPart02, HeroPart03 } from './HeroImage.styles';

type TransformProps = {
  rotateX: number;
  rotateY: number;
};

const constrain = 35;

const HeroImage: FC = () => {
  const [isCursorEntered, setCursorStatus] = useState<boolean>(false);
  const [transform, setTransform] = useState<TransformProps>({ rotateX: 0, rotateY: 0 });
  const heroWrapperRef = useRef<HTMLDivElement>(null);

  const onMouseEnterHandler = () => setCursorStatus(true);
  const onMouseLeaveHandler = () => {
    setCursorStatus(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  const onMouseMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    if (isCursorEntered) {
      const [x, y] = [event.nativeEvent.clientX, event.nativeEvent.clientY];
      const target = heroWrapperRef?.current;

      if (target) {
        const boundingBox = target.getBoundingClientRect();
        const horizontalAxis = (x - boundingBox.left) / boundingBox.width;
        const verticalAxis = (y - boundingBox.top) / boundingBox.height;
        const normalizeX = Math.min(Math.max(horizontalAxis, 0), 1);
        const normalizeY = Math.min(Math.max(verticalAxis, 0), 1);
        const calcX = Number((constrain / 2 - normalizeX * constrain).toFixed(2)) / 10;
        const calcY = Number((normalizeY * constrain - constrain / 2).toFixed(2)) / 10;

        setTransform({ rotateX: calcX, rotateY: calcY });
      }
    }
  };

  const defaultTransform = {
    transform: 'perspective(0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
  };

  const dynamicTransform = {
    transform: `perspective(1000px) rotateX(${transform.rotateY}deg) rotateY(${transform.rotateX}deg) scale3d(1.02, 1.02, 1.02)`,
  };

  return (
    <HeroWrapper>
      <Image src="/assets/images/HeroImg/hero.home.bg.svg" layout="fill" />
      <HeroParts
        style={isCursorEntered ? dynamicTransform : defaultTransform}
        ref={heroWrapperRef}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        onMouseMove={onMouseMoveHandler}
      >
        <HeroPart01>
          <Image src="/assets/images/HeroImg/hero.home.el.01.svg" width="397" height="300" />
        </HeroPart01>
        <HeroPart02>
          <Image src="/assets/images/HeroImg/hero.home.el.02.svg" width="200" height="356" />
        </HeroPart02>
        <HeroPart03>
          <Image src="/assets/images/HeroImg/hero.home.el.03.svg" width="204" height="145" />
        </HeroPart03>
      </HeroParts>
    </HeroWrapper>
  );
};

export default HeroImage;
