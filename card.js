// Example: Adding cards dynamically

// Select the container where cards will be appended
const scrollCards = document.querySelector(".scroll-cards");

// Example data (you can fetch from an API or elsewhere)
const cardData = [
  { title: "Card 1", content: "Content for Card 1" },
  { title: "Card 2", content: "Content for Card 2" },
  { title: "Card 3", content: "Content for Card 3" },
];

// Loop through the data and create HTML for each card
cardData.forEach((data) => {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = data.title; // Example: Set card title

  // Example: Add more content to each card if needed
  // const cardContent = document.createElement('p');
  // cardContent.textContent = data.content;
  // card.appendChild(cardContent);

  scrollCards.appendChild(card);
});
