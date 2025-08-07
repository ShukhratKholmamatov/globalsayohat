const tourContainer = document.getElementById('tourContainer');
    const detailsBox = document.getElementById('tourDetails');
    let currentCard = null;

    function showDetails(card) {
      const title = card.getAttribute('data-title');
      const desc = card.getAttribute('data-desc');
      const img = card.getAttribute('data-img');

      // If clicking the same card again → close
      if (card === currentCard) {
        detailsBox.classList.remove('show');
        detailsBox.remove();
        currentCard = null;
        return;
      }

      // Set content
      document.getElementById('detailsTitle').textContent = title;
      document.getElementById('detailsDesc').textContent = desc;
      document.getElementById('detailsImg').src = img;

      // Remove and move details box
      detailsBox.remove();
      detailsBox.classList.add('show');
      currentCard = card;

      // Find where to insert after row
      const cards = [...tourContainer.querySelectorAll('.tour-card')];
      const cardIndex = cards.indexOf(card);
      const cardsPerRow = 3;

      const rowEndIndex = Math.floor(cardIndex / cardsPerRow) * cardsPerRow + cardsPerRow - 1;
      const insertAfterCard = cards[Math.min(rowEndIndex, cards.length - 1)];
      insertAfterCard.insertAdjacentElement('afterend', detailsBox);
    }