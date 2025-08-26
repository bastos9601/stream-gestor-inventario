// Variables globales
let currentSection = 'inicio';
let isScrolling = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Inicialización de la aplicación
function initializeApp() {
    setupScrollAnimations();
    setupModalHandlers();
    setupFormHandlers();
}





// Configuración de animaciones de scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observar elementos con animación
    const animatedElements = document.querySelectorAll('.feature-card, .benefit-card, .step, .platform-item');
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}



// Configuración de manejadores de modales
function setupModalHandlers() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    
    // Cerrar modales con botón X
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });

    // Cerrar modales haciendo clic fuera
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });

    // Cerrar modales con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
}

// Configuración de manejadores de formularios
function setupFormHandlers() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
}

// Función para acceder al panel (ahora es un enlace directo)
function accederPanel() {
    // El botón ahora es un enlace directo, pero mantenemos la función por compatibilidad
    showNotification('Accediendo al panel...', 'info');
    
    // Redirigir al panel después de un breve delay
    setTimeout(() => {
        window.location.href = 'https://stream-gestor-iventario.onrender.com/login?next=%2F';
    }, 1000);
}



// Efectos de parallax
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-circle-1, .floating-circle-2, .floating-circle-3, .floating-circle-4');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Animaciones de entrada al hacer scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading-animation');
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.feature-card, .platform-item, .benefit-card, .step, .panel-feature');
    animatedElements.forEach(el => observer.observe(el));
}

// Efectos de partículas interactivas
function setupParticleEffects() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Hacer que las partículas reaccionen al mouse
        document.addEventListener('mousemove', (e) => {
            const rect = particle.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(e.clientX - centerX, 2) + 
                Math.pow(e.clientY - centerY, 2)
            );
            
            if (distance < 100) {
                particle.style.transform = `scale(2) translateY(-20px)`;
                particle.style.background = 'rgba(255, 215, 0, 0.8)';
            } else {
                particle.style.transform = 'scale(1)';
                particle.style.background = 'rgba(255, 255, 255, 0.6)';
            }
        });
    });
}

// Efectos de texto dinámico
function setupTextEffects() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // Efecto de escritura
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Iniciar después de un delay
    setTimeout(typeWriter, 1000);
}

// Efectos de hover mejorados
function setupEnhancedHover() {
    const cards = document.querySelectorAll('.feature-card, .platform-item, .benefit-card, .step, .panel-feature');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            // Crear efecto de brillo
            const glow = document.createElement('div');
            glow.className = 'card-glow';
            glow.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle at ${e.offsetX}px ${e.offsetY}px, rgba(255,255,255,0.3) 0%, transparent 50%);
                pointer-events: none;
                z-index: 1;
                transition: all 0.3s ease;
            `;
            
            card.appendChild(glow);
        });
        
        card.addEventListener('mousemove', (e) => {
            const glow = card.querySelector('.card-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at ${e.offsetX}px ${e.offsetY}px, rgba(255,255,255,0.3) 0%, transparent 50%)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const glow = card.querySelector('.card-glow');
            if (glow) {
                glow.remove();
            }
        });
    });
}

// Función para abrir modal de solicitar acceso
function solicitarAcceso() {
    const modal = document.getElementById('accessModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar modal
function closeModal(modal) {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Manejo del login
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validación básica
    if (!username || !password) {
        showNotification('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Simulación de login (aquí iría tu lógica real)
    if (username === 'demo' && password === 'demo') {
        showNotification('¡Inicio de sesión exitoso!', 'success');
        setTimeout(() => {
            closeModal(document.getElementById('panelModal'));
            // Aquí podrías redirigir al panel real
        }, 1500);
    } else {
        showNotification('Usuario o contraseña incorrectos', 'error');
    }
}

// Mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Agregar estilos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Efectos de parallax en el hero
function setupParallaxEffect() {
    window.addEventListener('scroll', function() {
        if (isScrolling) return;
        
        isScrolling = true;
        requestAnimationFrame(function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero) {
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            }
            
            isScrolling = false;
        });
    });
}

// Animación de contador para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Efecto de typing en el título
function setupTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Iniciar después de un pequeño delay
    setTimeout(typeWriter, 500);
}

// Lazy loading para imágenes
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Efecto de hover en las tarjetas
function setupHoverEffects() {
    const cards = document.querySelectorAll('.feature-card, .benefit-card, .platform-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}



// Inicializar efectos adicionales
document.addEventListener('DOMContentLoaded', function() {
    setupParallaxEffect();
    setupTypingEffect();
    setupLazyLoading();
    setupHoverEffects();
});

// Función para exportar datos (simulación)
function exportData() {
    const data = {
        platforms: ['Netflix', 'Disney+', 'HBO Max', 'Spotify'],
        exportDate: new Date().toISOString(),
        totalSubscriptions: 4
    };
    
    const csvContent = "data:text/csv;charset=utf-8," 
        + "Platform,Status,ExpiryDate\n"
        + "Netflix,Active,2025-03-15\n"
        + "Disney+,Active,2025-02-22\n"
        + "HBO Max,Active,2025-03-08\n"
        + "Spotify,Active,2025-04-01";
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "hplay_subscriptions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Datos exportados exitosamente', 'success');
}

// Función para buscar suscripciones
function searchSubscriptions(query) {
    const subscriptions = document.querySelectorAll('.platform-card');
    const results = [];
    
    subscriptions.forEach(subscription => {
        const text = subscription.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            results.push(subscription);
        }
    });
    
    return results;
}

// Función para filtrar por plataforma
function filterByPlatform(platform) {
    const allItems = document.querySelectorAll('.platform-item');
    
    allItems.forEach(item => {
        if (platform === 'all' || item.querySelector('span').textContent === platform) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Función para mostrar/ocultar contraseñas
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Función para validar formularios
function validateForm(formData) {
    const errors = [];
    
    if (!formData.username || formData.username.length < 3) {
        errors.push('El usuario debe tener al menos 3 caracteres');
    }
    
    if (!formData.password || formData.password.length < 6) {
        errors.push('La contraseña debe tener al menos 6 caracteres');
    }
    
    return errors;
}

// Función para mostrar errores de validación
function showValidationErrors(errors) {
    errors.forEach(error => {
        showNotification(error, 'error');
    });
}

// Función para limpiar formularios
function clearForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.reset();
    }
}

// Función para hacer la página responsive
function makeResponsive() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}

// Event listener para cambios de tamaño de ventana
window.addEventListener('resize', makeResponsive);

// Inicializar responsive al cargar
makeResponsive();

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Nuevas funciones dinámicas
    setupParallax();
    setupScrollAnimations();
    setupParticleEffects();
    setupTextEffects();
    setupEnhancedHover();
});
