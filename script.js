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

/* --- GESTION DE LA MODALE CONTACT --- */
const modal = document.getElementById('contactModal');
const btnContact = document.querySelector('.btn-contact'); // Ton bouton dans le header
const closeBtn = document.querySelector('.close-modal'); // La croix

// 1. Ouvrir la modale
btnContact.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le # dans l'URL
    modal.style.display = 'flex';
    // Petit délai pour permettre l'animation CSS
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
});

// 2. Fermer la modale
function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Attend la fin de l'animation
}

closeBtn.addEventListener('click', closeModal);

// 3. Fermer si on clique en dehors de la boîte
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});