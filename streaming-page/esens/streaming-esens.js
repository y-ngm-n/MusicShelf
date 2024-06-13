document.addEventListener("DOMContentLoaded", function() {
  const lp = document.querySelector('.lp');
  const audio = new Audio('../../musics/esens.mp3');
  let isRotating = false;
  let rotation = 0;
  let lastTimestamp = null;

  function animate(timestamp) {
      if (!lastTimestamp) {
          lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;

      if (isRotating) {
          rotation += delta * 0.09;
          rotation %= 360;
          lp.style.transform = `rotate(${rotation}deg)`;
      }

      lastTimestamp = timestamp;
      requestAnimationFrame(animate);
  }

  lp.addEventListener('click', () => {
      isRotating = !isRotating;
      if (isRotating) {
          audio.play();
          lastTimestamp = null;
          requestAnimationFrame(animate);
      } else {
          audio.pause();
      }
  });
});