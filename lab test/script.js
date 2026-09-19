document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MOBILE NAVBAR MENU TOGGLE ---
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  // Toggle menu open/close when hamburger is clicked
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenu.classList.remove("is-active");
    });
  });

  // --- 2. FETCH JSON AND RENDER PLAYERS ---
  const playerContainer = document.getElementById("player-container");

  async function fetchAndDisplayPlayers() {
    try {
      const response = await fetch("players.json");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const players = await response.json();
      playerContainer.innerHTML = ""; // Clear container

      players.forEach((player) => {
        const card = document.createElement("div");
        card.classList.add("player-card");

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

        playerContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching player data:", error);
      playerContainer.innerHTML = `<p style="color: red; text-align: center;">Failed to load player profiles. Please run this file using a Local Server (like Live Server in VS Code).</p>`;
    }
  }

  fetchAndDisplayPlayers();
});
