const danceOptions = [
  { value: 'bounce', label: '바운스', emoji: '⬆' },
  { value: 'spin',   label: '스핀',   emoji: '🔄' },
  { value: 'wave',   label: '웨이브', emoji: '〰' },
  { value: 'wiggle', label: '위글',   emoji: '↔' },
];

const speedOptions = [
  { value: 0.5, label: '느리게' },
  { value: 1,   label: '보통' },
  { value: 2,   label: '빠르게' },
  { value: 3,   label: '아주 빠르게' },
];

export default function AnimationControls({ isPlaying, speed, currentDance, onToggle, onSpeedChange, onDanceChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 제어">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-text">{isPlaying ? '정지' : '시작'}</span>
      </button>

      <div className="control-group">
        <label className="control-label">춤 동작</label>
        <div className="dance-buttons" role="group" aria-label="춤 동작 선택">
          {danceOptions.map(({ value, label, emoji }) => (
            <button
              key={value}
              className={`btn-dance ${currentDance === value ? 'active' : ''}`}
              onClick={() => onDanceChange(value)}
              aria-pressed={currentDance === value}
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">속도</label>
        <div className="speed-buttons" role="group" aria-label="속도 선택">
          {speedOptions.map(({ value, label }) => (
            <button
              key={value}
              className={`btn-speed ${speed === value ? 'active' : ''}`}
              onClick={() => onSpeedChange(value)}
              aria-pressed={speed === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
