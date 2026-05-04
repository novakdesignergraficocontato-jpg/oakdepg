// ============================================
// OAKPG - Hamburgueria & Cervejaria
// JavaScript - Interatividade e Funcionalidades
// ============================================

// Menu de Produtos
const menuItems = [
    {
        id: 1,
        name: 'Classic Burger',
        category: 'burgers',
        price: 'R$ 35,00',
        description: 'Burger clássico com carne premium, queijo derretido e vegetais frescos',
        image: 'images/burger-1.png'
    },
    {
        id: 2,
        name: 'Bacon Deluxe',
        category: 'burgers',
        price: 'R$ 42,00',
        description: 'Duplo de carne, bacon crocante, queijo cheddar e molho especial',
        image: 'images/burger-1.png'
    },
    {
        id: 3,
        name: 'Gourmet Premium',
        category: 'burgers',
        price: 'R$ 48,00',
        description: 'Carne Wagyu, queijo brie, cebola caramelizada e maionese trufada',
        image: 'images/burger-1.png'
    },
    {
        id: 4,
        name: 'Veggie Burger',
        category: 'burgers',
        price: 'R$ 32,00',
        description: 'Burger vegetariano com grão de bico, abacate e molho tahine',
        image: 'images/burger-1.png'
    },
    {
        id: 5,
        name: 'Craft Lager',
        category: 'beers',
        price: 'R$ 18,00',
        description: 'Cerveja artesanal tipo Lager, refrescante e equilibrada',
        image: 'images/beer-1.png'
    },
    {
        id: 6,
        name: 'IPA Artesanal',
        category: 'beers',
        price: 'R$ 22,00',
        description: 'IPA com notas cítricas e amargor marcante',
        image: 'images/beer-1.png'
    },
    {
        id: 7,
        name: 'Stout Premium',
        category: 'beers',
        price: 'R$ 24,00',
        description: 'Cerveja escura com notas de chocolate e café',
        image: 'images/beer-1.png'
    },
    {
        id: 8,
        name: 'Weiss Tradicional',
        category: 'beers',
        price: 'R$ 20,00',
        description: 'Cerveja de trigo com aromas de banana e cravo',
        image: 'images/beer-1.png'
    },
    {
        id: 9,
        name: 'Combo Burger + Cerveja',
        category: 'combos',
        price: 'R$ 49,00',
        description: 'Burger Classic + Craft Lager (500ml)',
        image: 'images/combo-1.png'
    },
    {
        id: 10,
        name: 'Combo Premium',
        category: 'combos',
        price: 'R$ 65,00',
        description: 'Gourmet Premium + IPA Artesanal (500ml)',
        image: 'images/combo-1.png'
    },
    {
        id: 11,
        name: 'Combo Amigos',
        category: 'combos',
        price: 'R$ 120,00',
        description: '2 Burgers + 2 Cervejas + Batata Frita',
        image: 'images/combo-1.png'
    },
    {
        id: 12,
        name: 'Combo Festa',
        category: 'combos',
        price: 'R$ 199,00',
        description: '4 Burgers + 4 Cervejas + Batata + Refrigerante',
        image: 'images/combo-1.png'
    }
];

// ============================================
// Inicialização
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems('all');
    setupEventListeners();
});

// ============================================
// Renderizar Menu
// ============================================

function renderMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <span class="menu-item-category">${getCategoryLabel(item.category)}</span>
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-price">${item.price}</div>
                <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="orderItem('${item.name}', '${item.price}')">Pedir</button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

function getCategoryLabel(category) {
    const labels = {
        'burgers': 'Burgers',
        'beers': 'Cervejas',
        'combos': 'Combos'
    };
    return labels[category] || category;
}

// ============================================
// Filtros de Menu
// ============================================

function setupEventListeners() {
    // Menu Toggle Mobile
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Filtros de Categoria
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderMenuItems(filter);
        });
    });

    // Formulário de Contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Enviar via WhatsApp
            const whatsappMessage = `Olá! Meu nome é ${name}, meu email é ${email}. Mensagem: ${message}`;
            const encoded = encodeURIComponent(whatsappMessage);
            window.open(`https://wa.me/5542987654321?text=${encoded}`, '_blank');
            
            // Limpar formulário
            this.reset();
            alert('Mensagem enviada com sucesso!');
        });
    }
}

// ============================================
// Função de Pedido
// ============================================

function orderItem(itemName, itemPrice) {
    const message = `Olá! Gostaria de pedir: ${itemName} (${itemPrice})`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5542987654321?text=${encoded}`, '_blank');
}

// ============================================
// Scroll Suave
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Animações ao Scroll
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.menu-item, .review-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// Navbar Background ao Scroll
// ============================================

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// Validação de Email
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// Funções Utilitárias
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#25D366' : '#FF6B35'};
        color: white;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ============================================
// Preloader
// ============================================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ============================================
// Service Worker (PWA Support)
// ============================================

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => {
        console.log('Service Worker registration failed: ', err);
    });
}

console.log('OAKPG Website - Loaded Successfully! 🍔🍺');
