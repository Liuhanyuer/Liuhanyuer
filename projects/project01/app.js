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
  shuffleJpgs();
  clipIndex = (clipIndex + 1) % totalClips;
}

let clipInterval = setInterval(playNextClip, 3000);

document.querySelectorAll(".title").forEach((title, index) => {
  title.addEventListener("click", () => {
    clipIndex = index;
    playNextClip();
    clearInterval(clipInterval);
    clipInterval = setInterval(playNextClip, 3000);
  });
});

// Create 10 irregular frames
for (let i = 0; i < 10; i++) {
  let frame = document.createElement('div');
  frame.className = 'frame';
  document.querySelector('.irregular-frames-container').appendChild(frame);
}
