const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuToggle.addEventListener('click', function()  {
    const cards = document.querySelector('nav a')
    if (cards.className === "hidden") {
        cards.className = "visible";
    }
    else {cards.className = "hidden";}
});