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
// Логика мобильного меню
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.onclick = function() {
    navLinks.classList.toggle('active');
    
    this.classList.toggle('open');
};
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    };
});

