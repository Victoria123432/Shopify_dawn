const ProductCardButtons = document.querySelectorAll('.card-button');

ProductCardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonContainer = button.closest('.button-cont');
    const showNowButton = buttonContainer.querySelector('.show-now-btn');

    if (showNowButton) {
      showNowButton.classList.add('visible');
    }

    button.style.display = 'none';
  });
});

document.addEventListener('click', (event) => {
  const clickedInSide = event.target.closest('.button-cont');

  if (!clickedInSide) {
    const visibleButtons = document.querySelectorAll('.show-now-btn.visible');

    visibleButtons.forEach((btn) => {
      btn.classList.remove('visible');

      const cardButton = btn.closest('.button-cont').querySelector('.card-button');
      if (cardButton) {
        cardButton.style.display = 'flex';
      }
    });
  }
});
