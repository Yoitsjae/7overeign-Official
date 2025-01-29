document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const visualizerCards = document.querySelectorAll(".visualizer-card");

  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();

    visualizerCards.forEach((card) => {
      const name = card.getAttribute("data-name").toLowerCase();
      const category = card.getAttribute("data-category").toLowerCase();

      if (name.includes(searchTerm) || category.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
