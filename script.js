document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animation d'entrée (UNIQUEMENT pour le TITRE maintenant)
    const title = document.querySelector('.main-title');
    const scrollInd = document.querySelector('.scroll-indicator'); // Si tu veux aussi animer la flèche

    setTimeout(() => {
        // Animation du Titre PORTFOLIO
        title.style.transition = "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)";
        title.style.opacity = "1";
        title.style.transform = "scale(1)";

        // Animation de la flèche du bas (optionnel, c'est joli si ça apparait après)
        if(scrollInd) {
            scrollInd.style.opacity = "1";
        }
    }, 200);

    // 2. Effet Parallaxe sur le titre
    const heroSection = document.querySelector('main');

    heroSection.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 90;
        const y = (window.innerHeight - e.pageY * 2) / 90;

        title.style.transform = `scale(1) translate(${x}px, ${y}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        title.style.transform = `scale(1) translate(0, 0)`;
    });
});