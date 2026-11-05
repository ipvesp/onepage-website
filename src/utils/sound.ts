let lastPlayTime = 0;

export const playSound = () => {
  const now = Date.now();
  // Prevent double sound trigger within 120ms (e.g. click + route change)
  if (now - lastPlayTime < 120) return;
  lastPlayTime = now;

  try {
    const audio = new Audio('/sound.mp3');
    audio.volume = 0.4;
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Browser autoplay policies may block audio before initial user interaction
    });
  } catch {
    // Ignore audio instantiation issues gracefully
  }
};
