// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme toggle
const toggleBtn = document.getElementById('themeToggle');
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') enableDark();

toggleBtn.addEventListener('click', () => {
    root.dataset.theme === 'dark' ? disableDark() : enableDark();
});

function enableDark() {
    root.dataset.theme = 'dark';
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
}

function disableDark() {
    delete root.dataset.theme;
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
}
// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;

        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Thanks for reaching out! This is a demo form.');
            btn.textContent = originalText;
            btn.disabled = false;
            contactForm.reset();
        }, 1500);
    });
}
