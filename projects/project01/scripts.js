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
