(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const timers = document.querySelectorAll(".timer");

  timers.forEach((timer) => {
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

      if (distance < 0) {
        clearInterval(x);
        timer.style.display = "none";
      }
    }, 1000);
  });
})();
