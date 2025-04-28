document.addEventListener('DOMContentLoaded', () => {
  const toolsSection = document.getElementById('toolsSection');
  const favorites = toolsSection.querySelectorAll('.favorite');

  // Cargar favoritos guardados
  const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};

  favorites.forEach(fav => {
    const card = fav.parentElement;
    const title = card.querySelector('h2').innerText;

    // Si estaba guardado como favorito
    if (savedFavorites[title]) {
      card.setAttribute('data-fav', 'true');
      fav.classList.add('active');
    }

    fav.addEventListener('click', () => {
      const isFav = card.getAttribute('data-fav') === 'true';

      if (isFav) {
        card.setAttribute('data-fav', 'false');
        fav.classList.remove('active');
        delete savedFavorites[title];
      } else {
        card.setAttribute('data-fav', 'true');
        fav.classList.add('active');
        savedFavorites[title] = true;
      }

      // Guardar cambios en localStorage
      localStorage.setItem('favorites', JSON.stringify(savedFavorites));

      reorderCards();
    });
  });

  reorderCards(); // Ordenar al cargar

  function reorderCards() {
    const cards = Array.from(toolsSection.children);

    const favCards = cards.filter(card => card.getAttribute('data-fav') === 'true');
    const nonFavCards = cards.filter(card => card.getAttribute('data-fav') === 'false');

    toolsSection.innerHTML = '';

    favCards.forEach(card => toolsSection.appendChild(card));
    nonFavCards.forEach(card => toolsSection.appendChild(card));
  }
});
