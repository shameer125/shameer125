import React from 'react';

const CustomCursor = () => {
  const cursorSm = React.useRef(null);
  const cursorLg = React.useRef(null);
  const rafIdRef = React.useRef(0);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
  });

  React.useEffect(() => {
    const onMove = event => {
      const { clientX, clientY } = event;
      if (!cursorLg.current) return;
      positionRef.current.mouseX =
        clientX - cursorLg.current.clientWidth / 2;
      positionRef.current.mouseY =
        clientY - cursorLg.current.clientHeight / 2;
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      rafIdRef.current = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (!cursorSm.current || !cursorLg.current) return;
      const { destinationX: dx, destinationY: dy } = positionRef.current;
      cursorSm.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
      cursorLg.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    followMouse();
    return () => cancelAnimationFrame(rafIdRef.current);
  }, []);

  return (
    <>
      <div className="cs-cursor_lg" ref={cursorLg} />
      <div className="cs-cursor_sm" ref={cursorSm} />
    </>
  );
};

export default CustomCursor;
