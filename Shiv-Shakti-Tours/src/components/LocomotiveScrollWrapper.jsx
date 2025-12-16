import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocomotiveScrollWrapper = ({ children }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      multiplier: 1,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollContainerRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollWrapper;
