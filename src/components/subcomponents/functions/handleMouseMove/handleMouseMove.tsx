export const handleMouseMove =
  (onMouseMove?: (pos: { x: number; y: number }) => void) =>
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!onMouseMove) return;
    const pos = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    };

    onMouseMove(pos);
    console.log(pos);
  };