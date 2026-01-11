import React, { useMemo } from 'react';
import PointMarker from './PointMarker';
import { meridiansData } from '../data/meridiansData';

const BodyMap = ({ viewMode, zoomLevel, selectedMeridian, onPointClick }) => {
  // Filter meridians based on selection
  const filteredMeridians = useMemo(() => {
    if (!selectedMeridian || selectedMeridian === 'all') {
      return meridiansData;
    }
    return meridiansData.filter(m => m.id === selectedMeridian);
  }, [selectedMeridian]);

  // Filter points based on zoom level
  const getVisiblePoints = (meridian) => {
    const pointsInView = meridian.points.filter(p => p.view === viewMode);

    if (zoomLevel <= 1) {
      // Show only major points at global view
      return pointsInView.filter(p => p.major);
    } else if (zoomLevel <= 1.5) {
      // Show major and some regular points
      return pointsInView;
    } else {
      // Show all points at detailed view
      return pointsInView;
    }
  };

  // Create smooth SVG path using bezier curves
  const createSmoothPath = (points) => {
    if (!points || points.length < 2) return '';

    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      // Use bezier curves for smoother lines
      if (i === points.length - 1) {
        path += ` L ${curr.x} ${curr.y}`;
      } else {
        const next = points[i + 1];
        const cp1x = prev.x + (curr.x - prev.x) * 0.5;
        const cp1y = prev.y + (curr.y - prev.y) * 0.5;
        const cp2x = curr.x - (next.x - curr.x) * 0.3;
        const cp2y = curr.y - (next.y - curr.y) * 0.3;
        path += ` Q ${cp1x} ${cp1y} ${curr.x} ${curr.y}`;
      }
    }

    return path;
  };

  // SVG coordinates and dimensions
  const viewBox = { x: 0, y: 0, width: 300, height: 600 };

  // Improved human body silhouette paths
  const bodyPaths = {
    front: `
      M150 5
      C145 5, 142 8, 142 15
      L142 25
      C142 30, 140 35, 140 45
      C140 52, 142 58, 145 65
      L145 75
      C145 82, 138 88, 130 95
      C125 100, 118 105, 112 115
      L107 128
      C102 138, 95 145, 88 158
      L82 175
      C78 185, 76 200, 76 220
      L76 270
      C76 285, 77 295, 79 305
      L82 340
      C84 355, 88 365, 95 375
      L105 395
      C112 405, 118 420, 122 445
      L124 475
      C125 490, 123 505, 118 525
      L112 545
      C108 552, 102 555, 95 556
      L80 557
      C72 557, 68 554, 65 548
      L60 530
      C57 520, 58 505, 62 485
      L68 445
      C71 425, 74 405, 74 385
      L74 310
      C74 295, 73 285, 70 275
      L67 240
      C65 225, 65 210, 68 195
      L75 165
      C78 155, 85 145, 92 135
      L100 120
      C106 110, 112 100, 118 92
      C124 84, 132 78, 140 72
      C144 68, 146 60, 146 50
      L146 30
      C146 20, 148 10, 150 5
      C152 10, 154 20, 154 30
      L154 50
      C154 60, 156 68, 160 72
      C168 78, 176 84, 182 92
      C188 100, 194 110, 200 120
      L208 135
      C215 145, 222 155, 225 165
      L232 195
      C235 210, 235 225, 235 240
      L233 275
      C232 285, 230 295, 230 310
      L230 385
      C230 405, 233 425, 236 445
      L242 485
      C246 505, 247 520, 244 530
      L239 548
      C236 554, 232 557, 224 557
      L209 556
      C202 555, 196 552, 192 545
      L186 525
      C181 505, 179 490, 180 475
      L182 445
      C184 420, 190 405, 197 395
      L207 375
      C214 365, 218 355, 220 340
      L223 305
      C225 295, 226 285, 226 270
      L226 220
      C226 200, 224 185, 220 175
      L215 158
      C208 145, 202 138, 195 128
      L191 115
      C186 105, 178 100, 172 95
      C164 88, 159 82, 157 75
      L157 65
      C159 58, 162 52, 162 45
      L162 25
      C162 15, 158 5, 150 5
    `,
    back: `
      M150 5
      C145 5, 142 8, 142 15
      L142 30
      C142 38, 140 45, 140 55
      C140 62, 142 68, 145 75
      L145 85
      C145 92, 140 98, 135 102
      C128 107, 120 112, 115 120
      L108 135
      C102 148, 96 165, 92 185
      L88 220
      C86 245, 86 270, 88 295
      L92 345
      C94 365, 98 385, 106 405
      L115 435
      C122 455, 128 475, 132 495
      L136 520
      C138 540, 138 555, 132 562
      L120 570
      C112 575, 102 575, 94 570
      L82 562
      C76 555, 76 540, 78 520
      L82 495
      C86 475, 92 455, 99 435
      L108 405
      C116 385, 120 365, 122 345
      L126 295
      C128 270, 128 245, 126 220
      L122 185
      C118 165, 112 148, 106 135
      L99 120
      C94 112, 86 107, 79 102
      C74 98, 69 92, 69 85
      L69 75
      C71 68, 74 62, 74 55
      L74 30
      C74 20, 70 10, 70 5
      L75 5
      C78 10, 82 15, 90 18
      L110 25
      C125 28, 140 28, 155 25
      L175 18
      C183 15, 188 10, 191 5
      L196 5
      C196 10, 192 20, 192 30
      L192 55
      C192 62, 195 68, 199 75
      L199 85
      C199 92, 194 98, 189 102
      C182 107, 174 112, 169 120
      L162 135
      C156 148, 150 165, 146 185
      L142 220
      C140 245, 140 270, 142 295
      L146 345
      C148 365, 152 385, 160 405
      L169 435
      C176 455, 182 475, 186 495
      L190 520
      C192 540, 192 555, 186 562
      L174 570
      C166 575, 156 575, 148 570
      L136 562
      C130 555, 130 540, 132 520
      L136 495
      C140 475, 146 455, 153 435
      L162 405
      C170 385, 174 365, 176 345
      L180 295
      C182 270, 182 245, 180 220
      L176 185
      C172 165, 166 148, 160 135
      L153 120
      C148 112, 140 107, 133 102
      C128 98, 123 92, 123 85
      L123 75
      C125 68, 128 62, 128 55
      L128 30
      C128 20, 124 10, 124 5
      L129 5
      C132 10, 136 15, 144 18
      L164 25
      C179 28, 194 28, 209 25
      L229 18
      C237 15, 242 10, 245 5
    `
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg">
      <svg
        viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
        className="w-full h-full max-w-2xl"
        style={{ maxHeight: '100%' }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for body fill */}
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAFAF5" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#F5F5F0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E8E4DD" stopOpacity="0.95" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
          </filter>

          {/* Glow filter for meridians */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Body silhouette */}
        <path
          d={bodyPaths[viewMode]}
          fill="url(#bodyGradient)"
          stroke="#2D2D2D"
          strokeWidth="1.2"
          filter="url(#dropShadow)"
        />

        {/* Body outline/contour */}
        <path
          d={bodyPaths[viewMode]}
          fill="none"
          stroke="#8B8680"
          strokeWidth="0.8"
          opacity="0.4"
        />

        {/* Center line (reference) */}
        {viewMode === 'front' && (
          <line
            x1="150"
            y1="70"
            x2="150"
            y2="545"
            stroke="#D4A574"
            strokeWidth="0.8"
            opacity="0.3"
            strokeDasharray="6 4"
          />
        )}

        {/* Spine line (back view) */}
        {viewMode === 'back' && (
          <line
            x1="150"
            y1="70"
            x2="150"
            y2="545"
            stroke="#8B8680"
            strokeWidth="0.8"
            opacity="0.3"
            strokeDasharray="6 4"
          />
        )}

        {/* Meridian paths */}
        {filteredMeridians.map((meridian) => {
          const pathData = meridian.path[viewMode];
          if (!pathData || pathData.length < 2) return null;

          const pathString = createSmoothPath(pathData);

          return (
            <g key={`meridian-${meridian.id}`}>
              {/* Outer glow for meridian path */}
              <path
                d={pathString}
                fill="none"
                stroke={meridian.color}
                strokeWidth={zoomLevel >= 2 ? '3' : '2'}
                opacity="0.15"
                filter="url(#glow)"
              />

              {/* Main meridian path */}
              <path
                d={pathString}
                fill="none"
                stroke={meridian.color}
                strokeWidth={zoomLevel >= 2 ? '1.5' : '1'}
                opacity={zoomLevel >= 2 ? 0.7 : 0.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={zoomLevel >= 2 ? 'none' : '8 4'}
              />
            </g>
          );
        })}

        {/* Acupoints */}
        {filteredMeridians.map((meridian) =>
          getVisiblePoints(meridian).map((point) => (
            <PointMarker
              key={`${meridian.id}-${point.id}`}
              point={point}
              meridian={meridian}
              isMajor={point.major}
              onClick={onPointClick}
            />
          ))
        )}

        {/* Region labels (visible when zoomed) */}
        {zoomLevel >= 2 && (
          <g className="pointer-events-none">
            {viewMode === 'front' && (
              <>
                <text x="150" y="45" textAnchor="middle" className="text-[6px] fill-stone-500" fontFamily="Microsoft YaHei, SimHei, sans-serif">头部</text>
                <text x="150" y="125" textAnchor="middle" className="text-[6px] fill-stone-500" fontFamily="Microsoft YaHei, SimHei, sans-serif">胸部</text>
                <text x="150" y="220" textAnchor="middle" className="text-[6px] fill-stone-500" fontFamily="Microsoft YaHei, SimHei, sans-serif">腹部</text>
              </>
            )}
            {viewMode === 'back' && (
              <>
                <text x="150" y="45" textAnchor="middle" className="text-[6px] fill-stone-500" fontFamily="Microsoft YaHei, SimHei, sans-serif">头部</text>
                <text x="150" y="200" textAnchor="middle" className="text-[6px] fill-stone-500" fontFamily="Microsoft YaHei, SimHei, sans-serif">脊柱</text>
              </>
            )}
          </g>
        )}
      </svg>

      {/* Zoom level indicator */}
      {zoomLevel > 1 && (
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-stone-200">
          <span className="text-xs font-medium text-stone-600">
            缩放: {zoomLevel}x - {zoomLevel <= 1 ? '全局' : zoomLevel <= 1.5 ? '区域' : '详细'} 视图
          </span>
        </div>
      )}

      {/* Point count indicator */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-stone-200">
        <span className="text-xs font-medium text-stone-600">
          可见 {filteredMeridians.reduce((acc, m) => acc + getVisiblePoints(m).length, 0)} 个穴位
        </span>
      </div>
    </div>
  );
};

export default BodyMap;
