(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Знайти всі елементи із класом "timer"
  const timers = document.querySelectorAll(".timer");

  timers.forEach((timer) => {
    // Отримати значення "endDate" із data-атрибута
    const endDate = timer.getAttribute("data-end-date");
    const countDown = new Date(endDate).getTime();

    const daysElement = timer.parentElement.querySelector("#days");
    const hoursElement = timer.parentElement.querySelector("#hours");
    const minutesElement = timer.parentElement.querySelector("#minutes");
    const secondsElement = timer.parentElement.querySelector("#seconds");

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDown - now;

      daysElement.innerText = Math.floor(distance / day);
      hoursElement.innerText = ":" + Math.floor((distance % day) / hour) + ":";
      minutesElement.innerText = Math.floor((distance % hour) / minute);
      secondsElement.innerText = ":" + Math.floor((distance % minute) / second);

      // Зупинити таймер, якщо час закінчився
      if (distance < 0) {
        clearInterval(x);
        timer.parentElement.style.display = "none"; // Сховати таймер
      }
    }, 1000);
  });
})();
