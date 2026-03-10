import './styles/global.css';
import './App.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

export default function App() {
  const { isPlaying, speed, currentDance, toggle, changeSpeed, changeDance } = useAnimation();

  return (
    <main className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="title-emoji" aria-hidden="true">🐱</span>
          냥냥 댄스파티
          <span className="title-emoji" aria-hidden="true">🎵</span>
        </h1>
        <p className="app-subtitle">고양이와 함께 춤을!</p>
      </header>

      <section className="stage-section" aria-label="댄싱 스테이지">
        <DancingCat isPlaying={isPlaying} speed={speed} currentDance={currentDance} />
      </section>

      <section className="controls-section" aria-label="애니메이션 컨트롤">
        <AnimationControls
          isPlaying={isPlaying}
          speed={speed}
          currentDance={currentDance}
          onToggle={toggle}
          onSpeedChange={changeSpeed}
          onDanceChange={changeDance}
        />
      </section>

      <footer className="app-footer">
        <p>클릭해서 고양이와 함께 춤추세요!</p>
      </footer>
    </main>
  );
}
