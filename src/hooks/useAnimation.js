import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [currentDance, setCurrentDance] = useState('bounce');

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  const changeDance = useCallback((dance) => {
    setCurrentDance(dance);
  }, []);

  return { isPlaying, speed, currentDance, toggle, changeSpeed, changeDance };
}
