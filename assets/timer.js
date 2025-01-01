(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Знайти елемент із класом "timer"
  const timerElement = document.querySelector(".timer");

  // Отримати значення "endDate" із data-атрибута
  const endDate = timerElement?.getAttribute("data-end-date");

  const countDown = new Date(endDate).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;
      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText =
          ":" + Math.floor((distance % day) / hour) + ":"),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText =
          ":" + Math.floor((distance % minute) / second));
      //do something later when date is reached
      if (distance < 0) {
        // document.getElementById("countdown").style.display = "none";
        document.getElementById("cd-content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
