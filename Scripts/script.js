// Плавное закрытие моб меню при клике на ссылки
const navLinksList = document.querySelectorAll('.nav-links a');
const navLinksContainer = document.getElementById('navLinks');
const menuIcon = document.querySelector('.menu-icon'); // если у тебя есть класс иконки

navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    // Если мобильное меню открыто (имеет класс active), закрываем его
    if (navLinksContainer && navLinksContainer.classList.contains('active')) {
      navLinksContainer.classList.remove('active');
    }
  });
});

const profileBtn = document.querySelector('.profile-icon');
const modal = document.getElementById('regModal');
const closeBtn = document.querySelector('.close-modal');

profileBtn.onclick = function() {
    modal.style.display = "flex";
}
closeBtn.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Обработка отправки формы
document.getElementById('regForm').onsubmit = function(e) {
    e.preventDefault();
    alert('Регистрация прошла успешно! (это демо)');
    modal.style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation(); // Запрещаем клику "проваливаться" глубже
            navLinks.classList.toggle('active');
            console.log('Меню нажато'); // Проверка в консоли
        });

        // Закрываем меню при клике на любую ссылку внутри
        navLinks.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    }
});
// --- ДАННЫЕ ДЛЯ СЕКЦИИ НОВОСТЕЙ ---
const newsData = [
  {
    title: "Режим The ClanWars",
    date: "29.06.2026",
    image: "img/news/update1.5.jpg", // Сюда укажи путь к картинке новости
    description: "Соревновательный режим 1 vs 1 с наблюдателями от игрока Nick, будет использован аналитикой для проведения турниров или игр на топ",
    link: "#"
  },
  {
    title: "Турнир Fireplace Vidente G1",
    date: "30.06.2026",
    image: "img/News/Setka.avif",
    description: "Регистрация на первый официальный турнир с общим призовым фондом официально открыта! Собирайте команду, подавайте заявки и докажите, что ваш клан — сильнейший.",
    link: "#"
  },
  {
    title: "Клан StarKem становится ТОП 1🏆",
    date: "27.06.2026",
    image: "img/news/prestige.jpg",
    description: "Monolith проиграл со счетом 2/1 клану SK. Смирятся ли они с поражением или бросят вызов?",
    link: "#"
  }
];
// Рендеринг новостей
const newsGrid = document.getElementById('newsGrid');
if (newsGrid) {
  newsGrid.innerHTML = ''; // Очищаем заглушки

  newsData.forEach(news => {
    const card = document.createElement('div');
    card.className = 'news-card';
    
    card.innerHTML = `
      <div class="news-img-container">
        <img src="${news.image}" alt="${news.title}" onerror="this.src='https://via.placeholder.com/350x180/1e293b/94a3b8?text=Fireplace+News'">
      </div>
      <div class="news-info">
        <span class="news-card-date">${news.date}</span>
        <h3 class="news-card-title">${news.title}</h3>
        <p class="news-desc">${news.description}</p>
        <a href="${news.link}" class="news-btn">Читать</a>
      </div>
    `;
    
    newsGrid.appendChild(card);
  });
}
// Обновление даты последнего обновления новостей
const newsDateEl = document.getElementById('newsDate');
if (newsDateEl) {
  newsDateEl.innerText = new Date().toLocaleDateString();
}
