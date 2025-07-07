'use client';
import React from 'react';

interface DemoRingProps {
  size?: number;
  strokeWidth?: number;
}

// 2/3(66.7%)만 채워진 애플워치 스타일 링, 오른쪽(시계방향)으로 회전 애니메이션
const DemoRing: React.FC<DemoRingProps> = ({
  size = 120,
  strokeWidth = 16,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = 2 / 3; // 2/3만 채움
  const offset = circumference * (1 - progress);

  return (
    <div style={{ display: 'inline-block' }}>
      <svg width={size} height={size}>
        <defs>
          {/* 미니멀 블루-민트 그라데이션 */}
          <linearGradient id="glare-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4fd1c5" /> {/* teal-300 */}
            <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
          </linearGradient>
        </defs>
        {/* 더 어두운 배경 링 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#181e29"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* 메인 그라데이션 링 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#glare-gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
            transition: 'stroke-dashoffset 0.5s',
          }}
        />
      </svg>
    </div>
  );
};

export default DemoRing;
