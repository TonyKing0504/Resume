import React from 'react';

interface SparklineProps {
  data: number[];
  active: boolean;
  width?: number;
  height?: number;
  className?: string;
}

const Sparkline: React.FC<SparklineProps> = ({ data, active, width = 112, height = 30, className = '' }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - 3 - ((d - min) / range) * (height - 6);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d={points.join(' ')} pathLength={1} className={`spark ${active ? 'drawn' : ''}`} />
    </svg>
  );
};

export default Sparkline;
