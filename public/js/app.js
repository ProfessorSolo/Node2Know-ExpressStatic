// Node2Know — public/js/app.js
console.log("Static JS loaded ✅");

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("status");
  if (el) el.textContent = "Client JS is running.";
});
