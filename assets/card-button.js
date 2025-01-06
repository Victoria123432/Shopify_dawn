const cardButtons = document.querySelectorAll(".card-button");

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Знаходимо контейнер кнопки
    const buttonContainer = button.closest(".button-cont");

    // Знаходимо кнопку "show now" всередині цього контейнера
    const showNowButton = buttonContainer.querySelector(".show-now-btn");

    // Додаємо клас для анімації
    if (showNowButton) {
      showNowButton.classList.add("visible");
    }

    // Ховаємо натиснуту кнопку
    button.style.display = "none";
  });
});

document.addEventListener("click", (event) => {
  const clickedInSide = event.target.closest(".button-cont");

  if (!clickedInSide) {
    const visibleButtons = document.querySelectorAll(".show-now-btn.visible");

    visibleButtons.forEach((btn) => {
      btn.classList.remove("visible");

      const cardButton = btn
        .closest(".button-cont")
        .querySelector(".card-button");
      if (cardButton) {
        cardButton.style.display = "flex";
      }
    });
  }
});
