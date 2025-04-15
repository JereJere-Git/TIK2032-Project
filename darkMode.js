
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Terapkan preferensi dark mode yang disimpan sebelumnya
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }

  // Saat tombol diklik
  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const mode = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
    toggle.textContent = mode === 'dark' ? '☀️' : '🌙';
  });
});
