import React, { useState } from 'react';

const PointMarker = ({ point, meridian, isMajor, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    e.stopPropagation();
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    e.stopPropagation();
    setIsHovered(false);
  };

  const getPointRadius = () => {
    if (point.major) {
      return isHovered ? 7 : 5;
    }
    return isHovered ? 5 : 3;
  };

  return (
    <g
      className="cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onClick(point);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer glow for major points */}
      {point.major && (
        <circle
          cx={point.x}
          cy={point.y}
          r={getPointRadius() + 3}
          fill="none"
          stroke={meridian.color}
          strokeWidth="1"
          opacity="0.4"
        />
      )}

      {/* Main point */}
      <circle
        cx={point.x}
        cy={point.y}
        r={getPointRadius()}
        fill={meridian.color}
        stroke="#fff"
        strokeWidth="2"
        opacity={point.major ? 0.95 : 0.75}
      >
        {isHovered && (
          <animate
            attributeName="r"
            values={`${getPointRadius()};${getPointRadius() + 1};${getPointRadius()}`}
            dur="0.3s"
            repeatCount="1"
          />
        )}
      </circle>

      {/* Inner highlight */}
      <circle
        cx={point.x - 0.5}
        cy={point.y - 0.5}
        r={getPointRadius() / 3}
        fill="#fff"
        opacity="0.7"
      />

      {/* Tooltip (visible on hover) */}
      {isHovered && (
        <g style={{ pointerEvents: 'none' }}>
          <rect
            x={point.x + 10}
            y={point.y - 28}
            width="75"
            height="32"
            rx="4"
            fill="#2D2D2D"
            opacity="0.95"
          />
          <text
            x={point.x + 47.5}
            y={point.y - 17}
            textAnchor="middle"
            fill="#fff"
            fontSize="11"
            fontWeight="bold"
            fontFamily="Microsoft YaHei, SimHei, Arial, sans-serif"
          >
            {point.name}
          </text>
          <text
            x={point.x + 47.5}
            y={point.y - 5}
            textAnchor="middle"
            fill="#D4A574"
            fontSize="9"
            fontFamily="Arial, sans-serif"
          >
            {point.pinyin}
          </text>
          {/* Tooltip arrow */}
          <polygon
            points={`${point.x + 6},${point.y - 13} ${point.x + 12},${point.y - 17} ${point.x + 12},${point.y - 9}`}
            fill="#2D2D2D"
            opacity="0.95"
          />
        </g>
      )}
    </g>
  );
};

export default PointMarker;
