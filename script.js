document.addEventListener("DOMContentLoaded", () => {

  const currentTimeUTC = document.getElementById("time");
  const currentDay = document.getElementById("day");

  function updateTime() {
    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString().split(" ")[4] + " UTC";
    currentDay.textContent = now.toLocaleString("en-US", { weekday: "long" });
  }

  updateTime();
  setInterval(updateTime, 1000);
});
