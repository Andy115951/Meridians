import React, { useState } from 'react';
import BodyMap from './components/BodyMap';
import Controls from './components/Controls';
import InfoPanel from './components/InfoPanel';
import { meridiansData } from './data/meridiansData';

function App() {
  const [viewMode, setViewMode] = useState('front'); // 'front' or 'back'
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedMeridian, setSelectedMeridian] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [selectedPointMeridian, setSelectedPointMeridian] = useState(null);

  const handlePointClick = (point) => {
    const meridian = meridiansData.find(m => m.points.some(p => p.id === point.id));
    setSelectedPoint(point);
    setSelectedPointMeridian(meridian);
  };

  const handleClosePanel = () => {
    setSelectedPoint(null);
    setSelectedPointMeridian(null);
  };

  return (
    <div className="min-h-screen bg-zen-bg text-zen-text">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-zen-text">
                经络腧穴可视化
              </h1>
              <p className="text-sm text-stone-600 mt-0.5">
                传统中医经络与腧穴可视化
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-stone-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>点击穴位查看详情</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Controls Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <Controls
              viewMode={viewMode}
              setViewMode={setViewMode}
              zoomLevel={zoomLevel}
              setZoomLevel={setZoomLevel}
              selectedMeridian={selectedMeridian}
              setSelectedMeridian={setSelectedMeridian}
            />
          </aside>

          {/* Body Map */}
          <div className="flex-1 min-h-[600px] bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
            <BodyMap
              viewMode={viewMode}
              zoomLevel={zoomLevel}
              selectedMeridian={selectedMeridian}
              onPointClick={handlePointClick}
            />
          </div>

          {/* Meridian Info Card */}
          {selectedMeridian && selectedMeridian !== 'all' && (
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-5">
                {(() => {
                  const meridian = meridiansData.find(m => m.id === selectedMeridian);
                  if (!meridian) return null;
                  return (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: meridian.color }}
                        />
                        <div>
                          <h3 className="font-bold text-zen-text">{meridian.name}</h3>
                          <p className="text-sm text-stone-500">{meridian.chineseName}</p>
                        </div>
                      </div>
                      <p className="text-sm text-stone-700 leading-relaxed mb-4">
                        {meridian.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-stone-500">穴位总数：</span>
                          <span className="font-medium text-zen-text">{meridian.points.length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-stone-500">主要穴位：</span>
                          <span className="font-medium text-zen-text">
                            {meridian.points.filter(p => p.major).length}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Quick Tips */}
              <div className="mt-4 bg-stone-100 rounded-lg border border-stone-200 p-4">
                <h4 className="font-semibold text-stone-700 mb-2 text-sm">操作提示</h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>悬停穴位查看名称</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>点击穴位查看详细信息</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>使用缩放查看更多穴位</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5">•</span>
                    <span>切换正面/背面视图</span>
                  </li>
                </ul>
              </div>
            </aside>
          )}
        </div>
      </main>

      {/* Info Panel */}
      <InfoPanel
        point={selectedPoint}
        meridian={selectedPointMeridian}
        onClose={handleClosePanel}
        isOpen={selectedPoint !== null}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-stone-500">
            交互式经络可视化 • 仅供教育用途
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
