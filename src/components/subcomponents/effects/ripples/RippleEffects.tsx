export const handleRippleOnClick = (
  e: React.MouseEvent<HTMLElement>,
  key: number,
  setRipples: React.Dispatch<
    React.SetStateAction<{ [key: number]: { x: number; y: number; size: number } | null }>
  >
) => {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.5;

  setRipples(prev => ({
    ...prev,
    [key]: { x: e.clientX - rect.left, y: e.clientY - rect.top, size }
  }));
};
