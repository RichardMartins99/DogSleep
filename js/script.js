document.addEventListener('DOMContentLoaded, () => {
    // Parallax effect
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
    
    // Floating Zs
    const heroContent = document.querySelector('.hero');
    
    function createZ() {
        const z = document.createElement('div');
        z.classList.add('z-animation');
        z.innerText = 'Z';
        z.style.left = Math.random() * 100 + 'vw';
        z.style.animationDuration = Math.random() * 3 + 2 + 's';
        heroContent.appendChild(z);
    
        setTimeout(() => {
            z.remove();
        }, 5000);
    }
    
    const zInterval = setInterval(createZ, 500);
    
    window.addEventListener('beforeunload', () => {
        clearInterval(zInterval);
    });
    
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
})
