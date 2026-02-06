function CornerClipPaths() {
  return (
    <svg width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="corner-tl" clipPathUnits="objectBoundingBox">
          <path d="M 0 0 L 1 0 A 0.5 0.5 0 0 1 0 1 Z" />
        </clipPath>
        <clipPath id="corner-tr" clipPathUnits="objectBoundingBox">
          <path d="M 1 0 L 1 1 A 0.5 0.5 0 0 1 0 0 Z" />
        </clipPath>
        <clipPath id="corner-br" clipPathUnits="objectBoundingBox">
          <path d="M 0 0 L 1 0 A 0.5 0.5 0 0 1 0 1 Z" />
        </clipPath>
        <clipPath id="corner-bl" clipPathUnits="objectBoundingBox">
          <path d="M 0 1 L 0 0 A 0.5 0.5 0 0 1 1 1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CornerClipPaths;
