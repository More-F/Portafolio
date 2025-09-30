import { animate, stagger, text } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

document.addEventListener("DOMContentLoaded", () => {
        const { words } = text.split('.typewriter-text',  {
        words: { wrap: 'clip' },
    });

    animate(words, {
        y: [
            { to: ['100%', '0%'] },
            { to: '-100%', delay: 1750, ease: 'in(3)' }
        ],
        duration: 750,
        ease: 'out(3)',
        delay: stagger(100),
        loop: true,
    });

    text.split('.hero-text h1', {lines: { wrap: 'clip' },
    })
    .addEffect(({ lines }) => animate(lines, {
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 1750, ease: 'in(3)' }
    ],
    duration: 750,
    ease: 'out(3)',
    delay: stagger(200),
    loop: true,
    loopDelay: 500,
    }));

    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#bbbcccff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#b9bacaff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 3, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
            }
        }
    });



});
