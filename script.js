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
