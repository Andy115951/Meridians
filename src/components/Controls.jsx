import React from 'react';

const Controls = ({ viewMode, setViewMode, zoomLevel, setZoomLevel, selectedMeridian, setSelectedMeridian }) => {
  const meridians = [
    { id: 'all', name: '全部经络', color: '#2D2D2D' },
    // 手三阴经
    { id: 'lung', name: '肺经', color: '#8B8680' },
    { id: 'pericardium', name: '心包经', color: '#FF00FF' },
    { id: 'heart', name: '心经', color: '#C41E3A' },
    // 手三阳经
    { id: 'largeIntestine', name: '大肠经', color: '#E6E6FA' },
    { id: 'sanjiao', name: '三焦经', color: '#FFA07A' },
    { id: 'smallIntestine', name: '小肠经', color: '#FF69B4' },
    // 足三阴经
    { id: 'spleen', name: '脾经', color: '#FFD700' },
    { id: 'kidney', name: '肾经', color: '#1E90FF' },
    { id: 'liver', name: '肝经', color: '#228B22' },
    // 足三阳经
    { id: 'stomach', name: '胃经', color: '#D4A574' },
    { id: 'gallbladder', name: '胆经', color: '#32CD32' },
    { id: 'bladder', name: '膀胱经', color: '#00008B' },
    // 奇经八脉
    { id: 'governor', name: '督脉', color: '#8B0000' },
    { id: 'conception', name: '任脉', color: '#DC143C' },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* View Toggle */}
      <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-3">
        <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
          视图
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('front')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
              viewMode === 'front'
                ? 'bg-stone-800 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            正面
          </button>
          <button
            onClick={() => setViewMode('back')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
              viewMode === 'back'
                ? 'bg-stone-800 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            背面
          </button>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-3">
        <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
          缩放
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoomLevel(Math.max(1, zoomLevel - 0.5))}
            disabled={zoomLevel <= 1}
            className="flex-1 py-2 px-3 rounded-md text-sm font-medium bg-stone-100 text-stone-700 hover:bg-stone-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            −
          </button>
          <span className="flex-1 text-center text-sm font-medium text-stone-700">
            {zoomLevel}x
          </span>
          <button
            onClick={() => setZoomLevel(Math.min(3, zoomLevel + 0.5))}
            disabled={zoomLevel >= 3}
            className="flex-1 py-2 px-3 rounded-md text-sm font-medium bg-stone-100 text-stone-700 hover:bg-stone-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            +
          </button>
        </div>
        <button
          onClick={() => setZoomLevel(1)}
          className="w-full mt-2 py-2 px-3 rounded-md text-sm font-medium bg-stone-200 text-stone-700 hover:bg-stone-300 transition-all duration-200"
        >
          重置缩放
        </button>
      </div>

      {/* Meridian Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-3">
        <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
          经络 (十四经)
        </h3>
        <div className="space-y-1.5 max-h-[320px] overflow-y-auto">
          {meridians.map((meridian) => (
            <button
              key={meridian.id}
              onClick={() => setSelectedMeridian(selectedMeridian === meridian.id ? null : meridian.id)}
              className={`w-full py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedMeridian === meridian.id
                  ? 'bg-stone-800 text-white'
                  : 'hover:bg-stone-100 text-stone-700'
              }`}
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: meridian.color }}
              />
              <span className="truncate">{meridian.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-3">
        <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">
          图例
        </h3>
        <div className="space-y-2 text-sm text-stone-700">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-stone-400 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-amber-600" />
            </div>
            <span>主要穴位</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-stone-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-500" />
            </div>
            <span>普通穴位</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-stone-400" />
            <span>经络路径</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
