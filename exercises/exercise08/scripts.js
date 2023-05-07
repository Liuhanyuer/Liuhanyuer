const colors = [
    { name: 'Radiant Red', code: '#ff4136' },
    { name: 'Majestic Magenta', code: '#f012be' },
    { name: 'Vivid Violet', code: '#b10dc9' },
    { name: 'Serene Sky', code: '#7fdbff' },
    { name: 'Ocean Odyssey', code: '#0074d9' },
    { name: 'Mystic Mint', code: '#2ecc40' },
    { name: 'Enchanted Emerald', code: '#3d9970' },
    { name: 'Luscious Lime', code: '#01ff70' },
    { name: 'Yummy Yellow', code: '#ffdc00' },
    { name: 'Glowing Gold', code: '#b58900' },
    { name: 'Opulent Orange', code: '#ff851b' },
    { name: 'Blushing Beige', code: '#f0e68c' },
    { name: 'Sandy Shores', code: '#d3c6a3' },
    { name: 'Peachy Paradise', code: '#ff9f80' },
    { name: 'Calm Coral', code: '#ff7f50' },
    { name: 'Brilliant Blue', code: '#4682b4' },
    { name: 'Royal Rose', code: '#b22222' },
    { name: 'Glorious Green', code: '#228b22' },
    { name: 'Tantalizing Teal', code: '#20b2aa' },
    { name: 'Perfect Purple', code: '#9370db' },
  ];

  const colorPalette = document.getElementById('colorPalette');

colors.forEach(color => {
  const colorStrip = document.createElement('div');
  colorStrip.className = 'colorStrip';
  colorStrip.style.backgroundColor = color.code;
  colorStrip.innerHTML = `<span>${color.name} - ${color.code}</span>`;
  colorPalette.appendChild(colorStrip);

  colorStrip.addEventListener('click', function() {
    document.querySelectorAll('.ideaCard').forEach(card => {
      card.style.backgroundColor = color.code;
    });
    colorStrip.style.color = 'black';
  });
});

const ideas = [
    "A Saas for unique dining experiences",
    "A subscription-based eco-friendly clothing line",
    "Marketplace for equity swaps",
    "Automated solar panel cleaners",
    "BIM for Geothermal piping system",
    "IOT gun control",
    "Crypto LinkedIn",
    "Edible utensils",
    "Kite energy",
    "ESG Saas",
  ];
  
  document.getElementById('generateIdeaBtn').addEventListener('click', function() {
    const ideaCardsContainer = document.getElementById('ideaCardsContainer');
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    const ideaCard = document.createElement('div');
    ideaCard.className = 'ideaCard';
    ideaCard.textContent = randomIdea;
  
    ideaCardsContainer.prepend(ideaCard);
    ideaCardsContainer.childNodes.forEach((card, index) => {
      card.style.transform = `translateY(${index * 60}px)`;
    });
  });
  
  
  