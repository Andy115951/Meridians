import React, { useEffect } from 'react';

const InfoPanel = ({ point, meridian, onClose, isOpen }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!point || !meridian) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-zen-paper shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-zen-paper/95 backdrop-blur-sm border-b border-stone-200 z-10">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: meridian.color }}
              />
              <h2 className="text-lg font-semibold text-zen-text">
                {meridian.chineseName}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-200 transition-colors duration-200"
              aria-label="关闭"
            >
              <svg
                className="w-6 h-6 text-zen-text"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Point Name */}
          <div>
            <div className="flex items-baseline gap-3 mb-3">
              <h1 className="text-4xl font-bold text-zen-text">
                {point.name}
              </h1>
              <span className="text-2xl text-stone-500">
                ({point.pinyin})
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-200 rounded-full">
              <span className="text-sm font-semibold text-zen-text">
                {point.id}
              </span>
              {point.major && (
                <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">
                  主要穴位
                </span>
              )}
            </div>
          </div>

          {/* Meridian Info */}
          <div className="p-4 bg-stone-100 rounded-lg border-l-4" style={{ borderLeftColor: meridian.color }}>
            <p className="text-sm text-stone-700">
              {meridian.description}
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-zen-text mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              定位
            </h3>
            <p className="text-stone-700 leading-relaxed bg-white p-4 rounded-lg border border-stone-200">
              {point.location}
            </p>
          </div>

          {/* Functions */}
          <div>
            <h3 className="text-lg font-semibold text-zen-text mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              功能
            </h3>
            <ul className="space-y-2">
              {point.functions.map((func, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: meridian.color }} />
                  <span className="text-stone-700">{func}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Indications */}
          <div>
            <h3 className="text-lg font-semibold text-zen-text mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              主治
            </h3>
            <div className="flex flex-wrap gap-2">
              {point.indications.map((indication, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-stone-100 text-stone-700 rounded-full text-sm border border-stone-200"
                >
                  {indication}
                </span>
              ))}
            </div>
          </div>

          {/* Special Note */}
          {point.note && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-amber-800 text-sm mb-1">备注</h4>
                  <p className="text-amber-700 text-sm">{point.note}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-4 bg-stone-100 border-t border-stone-200">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-stone-800 hover:bg-stone-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            关闭面板
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoPanel;
