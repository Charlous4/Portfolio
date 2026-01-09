document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animation d'entrée (Apparition du texte)
    const title = document.querySelector('.main-title');
    const author = document.querySelector('.author-name');

    // On utilise setTimeout pour créer un léger délai
    setTimeout(() => {
        title.style.transition = "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)";
        title.style.opacity = "1";
        title.style.transform = "scale(1)";
        
        author.style.transition = "all 0.8s ease 0.3s"; // 0.3s de délai
        author.style.opacity = "1";
        author.style.transform = "translateY(0)";
    }, 200);

    // 2. Effet Parallaxe (Le titre bouge légèrement avec la souris)
    const heroSection = document.querySelector('main');

    heroSection.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 90;
        const y = (window.innerHeight - e.pageY * 2) / 90;

        title.style.transform = `scale(1) translate(${x}px, ${y}px)`;
    });

    // Reset de la position quand la souris quitte la zone
    heroSection.addEventListener('mouseleave', () => {
        title.style.transform = `scale(1) translate(0, 0)`;
    });

    // 3. Remplissage dynamique du nom (Optionnel)
    // Tu peux changer ton nom ici sans toucher au HTML
    const nameElement = document.getElementById('myName');
    // nameElement.innerText = "TON PRÉNOM NOM"; 
});