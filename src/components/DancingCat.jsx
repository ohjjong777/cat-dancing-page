import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const danceStyles = {
  bounce: 'dance-bounce',
  spin:   'dance-spin',
  wave:   'dance-wave',
  wiggle: 'dance-wiggle',
};

export default function DancingCat({ isPlaying, speed, currentDance }) {
  const animationClass = danceStyles[currentDance] || 'dance-bounce';
  const duration = (1 / speed).toFixed(2);

  return (
    <div className="cat-stage">
      <div className="music-notes" aria-hidden="true">
        <span className="note note-1">♪</span>
        <span className="note note-2">♫</span>
        <span className="note note-3">♩</span>
        <span className="note note-4">♬</span>
        <span className="note note-5">♪</span>
      </div>

      <div
        className={`cat-wrapper ${isPlaying ? animationClass : 'paused'}`}
        style={{ '--dance-duration': `${duration}s` }}
        role="img"
        aria-label="춤추는 고양이"
      >
        <img src={catSvg} alt="춤추는 고양이" className="cat-image" />
      </div>

      <div className="stage-floor" aria-hidden="true" />

      {isPlaying && (
        <div className="spotlight" aria-hidden="true" />
      )}
    </div>
  );
}
