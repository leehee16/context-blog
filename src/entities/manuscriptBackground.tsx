import React from 'react';

interface ManuscriptBackgroundProps {
  width?: number;
  height?: number;
  cellSize?: number;
  lineColor?: string;
  lineWidth?: number;
  longGridHeight?: number;
  style?: React.CSSProperties;
}

const ManuscriptBackground: React.FC<ManuscriptBackgroundProps> = ({
  width = 700,
  height = 700,
  cellSize = 32,
  lineColor = '#bbb',
  lineWidth = 1,
  longGridHeight = 12, // 긴 그리드의 두께(행의 절반 이하)
  style,
}) => {
  // 한 패턴(긴 그리드+격자)의 높이
  const patternHeight = longGridHeight + cellSize;
  // 패턴이 몇 번 반복되는지
  const patternCount = Math.floor(height / patternHeight);
  const cols = Math.floor(width / cellSize);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        ...style,
      }}
      preserveAspectRatio="none"
    >
      {Array.from({ length: patternCount }).map((_, i) => {
        const yOffset = i * patternHeight;
        return (
          <g key={`pattern-${i}`}>
            {/* 긴 그리드 (위아래로 짧음) */}
            <rect
              x={0}
              y={yOffset}
              width={width}
              height={longGridHeight}
              fill="none"
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
            {/* 그 밑에 정사각형 네모 격자 */}
            {Array.from({ length: cols }).map((_, col) => (
              <rect
                key={`cell-${i}-${col}`}
                x={col * cellSize}
                y={yOffset + longGridHeight}
                width={cellSize}
                height={cellSize}
                fill="none"
                stroke={lineColor}
                strokeWidth={lineWidth}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
};

export default ManuscriptBackground;
