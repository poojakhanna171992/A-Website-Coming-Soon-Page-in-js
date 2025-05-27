let countdown;

function startCountdown() {
  clearInterval(countdown); // Clear any existing countdown

  const dateInput = document.getElementById("date").value;
  const timeInput = document.getElementById("time").value;

  if (!dateInput || !timeInput) {
    alert("Please select both date and time.");
    return;
  }
  const combinedDateTime = new Date(`${dateInput}T${timeInput}`).getTime();
  countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = combinedDateTime - now;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);
}
