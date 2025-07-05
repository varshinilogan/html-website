// Click Interaction
const clickBtn = document.getElementById("clickButton");
const message = document.getElementById("message");
clickBtn.addEventListener("click", () => {
  message.textContent = "Thanks for clicking!";
});

document.getElementById("resetBtn").addEventListener("click", () => {
  message.textContent = "Waiting...";
});

// Scroll-to-Top Button
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme Toggle (Light/Dark Mode)
const toggleTheme = document.getElementById("themeToggle");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact form (no backend)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! (Form not connected to backend.)");
});
