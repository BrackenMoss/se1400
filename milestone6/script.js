const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function()  {
    const cards = document.querySelector('.navigation')
    cards.classList.toggle('hidden')
});