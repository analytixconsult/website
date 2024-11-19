// Toggle navigation menu for mobile devices
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Typing effect
const text = "We’re committed to your success, and payment will only be made through the cost savings you achieve";
let index = 0;
const typingTextElement = document.getElementById("typing-text");

function typeText() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index); // Gunakan textContent agar lebih aman
        index++;
        setTimeout(typeText, 150); // Kecepatan mengetik
    }
}

// Mulai efek mengetik saat halaman dimuat
window.onload = typeText;
