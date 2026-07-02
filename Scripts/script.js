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
        title: "Турнир Fireplace Vidente G1",
        date: "03.07.2026",
        image: "img/News/Setka.avif",
        description: "Регистрация на первый официальный турнир с общим призовым фондом официально открыта! Собирайте команду, подавайте заявки и докажите, что ваш клан - сильнейший.",
        link: "#",
        likes: 0
      },
      {
        title: "Новый режим The ClanWars",
        date: "02.07.2026",
        image: "img/news/update1.5.jpg",
        description: "Клановые войны любого формата с наблюдателями от игрока Nick. Новый режим для КВ и игр на топ будет доступен совсем скоро!",
        link: "#",
        likes: 0
      },
      {
        title: "Новая система Престижа",
        date: "01.07.2026",
        image: "img/news/prestige.jpg",
        description: "Мы полностью изменили систему престижа, теперь он более четкий и балансный",
        link: "#",
        likes: 0
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
        <div class="news-actions">
          <a href="${news.link}" class="news-btn">Читать</a>
          <div class="like-button-wrapper" data-news-id="${news.id}">
            <span class="like-icon" data-liked="false">♡</span> <!-- Пустое сердце -->
            <span class="like-count"></span> <!-- Пустой счетчик лайков -->
          </div>
        </div>
      </div>
    `;

    newsGrid.appendChild(card);

    const likeButtonWrapper = card.querySelector(`.like-button-wrapper[data-news-id="${news.id}"]`);
    const likeIcon = likeButtonWrapper.querySelector('.like-icon');
    const likeCountSpan = likeButtonWrapper.querySelector('.like-count');

    likeButtonWrapper.addEventListener('click', () => {
      if (likeIcon.dataset.liked === 'false') {
        // СТАВИМ ЛАЙК:
        likeIcon.textContent = '♥️';
        likeCountSpan.textContent = '1';
        likeIcon.dataset.liked = 'true';
        likeButtonWrapper.classList.add('liked');
      } else {
        // УБИРАЕМ ЛАЙК:
        likeIcon.textContent = '♡';
        likeCountSpan.textContent = '';
        likeIcon.dataset.liked = 'false';
        likeButtonWrapper.classList.remove('liked');
      }
    });

    newsGrid.appendChild(card);
  });
}

function scrollNews(amount) {
  const container = document.getElementById('newsGrid');
  container.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

const newsDateEl = document.getElementById('newsDate');
if (newsDateEl) {
  newsDateEl.innerText = new Date().toLocaleDateString();
}
