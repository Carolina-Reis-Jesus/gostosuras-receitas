document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    if(menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            nav.classList.toggle('active');
        });
    }
});