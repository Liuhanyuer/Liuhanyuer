function updateJpgPositions(initial, duration) {
    const jpgs = document.querySelectorAll(".jpg");
    const titles = document.querySelectorAll(".title");
  
    jpgs.forEach((jpg, index) => {
      const scale = Math.pow(0.9, index);
      const translateX = -20 * index;
      jpg.style.transform = `scale(${scale}) translateX(${translateX}%)`;
      jpg.style.zIndex = 6 - index;
      jpg.style.filter = index === 0 ? "grayscale(0%)" : "grayscale(100%)";
  
      if (initial) {
        jpg.style.transition = `none`;
      } else {
        jpg.style.transition = `all ${duration}s`;
      }
  
      const title = titles[jpg.dataset.index];
      const rectangle = title.querySelector('.rectangle');
      if (index === 0) {
        rectangle.classList.add("rectangle-selected");
      } else {
        rectangle.classList.remove("rectangle-selected");
      }
    });
  }
  
  document.querySelectorAll(".jpg").forEach((jpg, index) => {
    jpg.dataset.index = index;
  });
  
  updateJpgPositions(true, 1);
  
  function shuffleJpgs() {
    const jpgs = document.querySelectorAll(".jpg");
    const firstJpg = jpgs[0];
    firstJpg.parentElement.appendChild(firstJpg);
    updateJpgPositions(false, 1);
  }
  
  let clipIndex = 0;
  const totalClips = 6;
  
  function playNextClip() {
    // Shuffle the jpgs to play the current clip
    shuffleJpgs();
  
    // Increment the clipIndex, and wrap it around if it exceeds the total number of clips
    clipIndex = (clipIndex + 1) % totalClips;
  }
  
  // Set the interval to play each clip
  const clipInterval = setInterval(playNextClip, 3000);
  
  // Add click event listeners to the titles
  document.querySelectorAll(".title").forEach((title, index) => {
    title.addEventListener("click", () => {
      // Change the clipIndex to the clicked title's index
      clipIndex = index;
      playNextClip();
  
      // Clear and reset the interval
      clearInterval(clipInterval);
      clipInterval = setInterval(playNextClip, 3000);
    });
  });
  