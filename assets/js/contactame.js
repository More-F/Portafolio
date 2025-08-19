// Configuración de partículas para el fondo (añadir antes de cerrar el body)
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('contact-particles')) {
        particlesJS('contact-particles', {
            "particles": {
                "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00ff66" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { 
                    "enable": true, 
                    "distance": 150, 
                    "color": "#00ff66", 
                    "opacity": 0.1, 
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 2, 
                    "direction": "none", 
                    "random": true, 
                    "straight": false, 
                    "out_mode": "out" 
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" }
                }
            }
        });
    }
});