// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select the container where cards will be injected
  const playerContainer = document.getElementById("player-container");

  // Asynchronous function to fetch and display players
  async function fetchAndDisplayPlayers() {
    try {
      // Fetch data from the local JSON file
      const response = await fetch("players.json");

      // Check if the response is valid
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON data
      const players = await response.json();

      // Clear container (optional, good practice)
      playerContainer.innerHTML = "";

      // Loop through each player and generate HTML
      players.forEach((player) => {
        // Create a div element for the card
        const card = document.createElement("div");
        card.classList.add("player-card");

        // Construct the inner HTML using template literals
        card.innerHTML = `
                    <img src="${player.image}" alt="${player.name}" class="player-img">
                    <div class="player-info">
                        <h3>${player.name}</h3>
                        <p class="player-position">${player.position}</p>
                        
                        <div class="player-details">
                            <div class="detail-item">
                                <span class="detail-label">NUMBER</span>
                                <span class="detail-value">#${player.number}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">COUNTRY</span>
                                <span class="detail-value">${player.nationality}</span>
                            </div>
                        </div>
                    </div>
                `;

        // Append the completed card to the container
        playerContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching player data:", error);
      playerContainer.innerHTML = `<p style="color: red; text-align: center;">Failed to load player profiles. Ensure you are running this on a local web server.</p>`;
    }
  }

  // Execute the function
  fetchAndDisplayPlayers();
});
