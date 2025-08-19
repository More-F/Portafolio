document.querySelectorAll('.card-with-image').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.clientX - card.getBoundingClientRect().left;
        const y = e.clientY - card.getBoundingClientRect().top;
        
        const centerX = card.offsetWidth / 2;
        const centerY = card.offsetHeight / 2;
        
        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});