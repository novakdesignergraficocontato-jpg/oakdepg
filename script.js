// ============================================
// OAKPG - Hamburgueria & Cervejaria
// JavaScript - Interatividade e Funcionalidades
// ============================================

// Menu de Produtos
const menuItems = [
    {
        id: 1,
        name: 'PILSEN PREMIUM',
        category: 'Suave / Leve',
        description: 'Apresenta uma coloração levemente dourada e boa formação de espuma. Os maltes utilizados em sua receita conferem aromas e paladar único, com lúpulos que proporcionam equilíbrio entre o amargor e sabor do malte. Uma cerveja leve para apreciar em qualquer dia.',
        image: 'images/PILSEN-PREMIUM.png'
    },
    {
        id: 2,
        name: 'HOP LAGER',
        category: 'Suave / Leve',
        description: 'Premiado com Medalha de OURO no Concurso Brasileiro de Cerveja 2022. Uma cerveja leve e refrescante, de baixa fermentação e baixo teor alcoólico. Seu sabor ganha com a adição de lúpulos no processo de Dry Hop na maturação, tornando-se uma cerveja excepcional.',
        image: 'images/HOP-LAGER.png'
    },
    {
        id: 3,
        name: 'WEISS',
        category: 'Suave / Leve',,
        description: 'Chopp de trigo no estilo alemão. Com aromas que lembram banana e especiarias.',
        image: 'images/TRIGO-(WEISS).png'
    },
    {
        id: 4,
        name: 'SESSION IPA',
        category: 'Suave / Leve',
        description: 'Uma IPA mais leve, refrescante e lupulada na medida. Amarga e saborosa com altíssimo drinkability. leva lúpulo mosaic na maturação.',
        image: 'images/SESSION-IPA.png'
    },
    {
        id: 5,
        name: 'WHITE DRAFT',
        category: 'Suave / Leve',
        description: 'Como sucesso de vendas do RED DRAFT e a pedido dos clientes o Chopp de Vinho Branco foi lançado. Desenvolvido a partir de pesquisa de mercado,  testes sensoriais  com consumidores, nasceu  a bebida com os riquíssimos aromas e sabores da uva branca fresca.',
        image: 'images/VINHO-BRANCO.png'
    },
    {
        id: 6,
        name: 'APA',
        category: 'Equilibrado',
        description: 'A APA (American Pale Ale) é feita com lúpulos norte americanos no dry hop e maltes que dão um corpo incrível. Para quem gosta de uma mais leve, aromática na medida. ',
        image: 'images/APA.png'
    },
    {
        id: 7,
        name: 'RED DRAFT',
        category: 'Equilibrado',
        description: 'Um produto que vem ganhando o paladar dos brasileiros, o chopp de vinho é uma saborosa mistura das duas bebidas mais consumida no pais, com uma coloração vermelho rubi tem sabor marcante e refrescante. A doçura da uva e suavidade do malte. faz com que esse produto agrade um grande publico.',
        image: 'images/VINHO-RED.png'
    },
    {
        id: 8,
        name: 'IPA',
        category: 'Amargo / Intenso',
        description: 'Elaborada a partir de lúpulos americanos selecionados, é uma interpretação do estilo American IPA, apresenta amargor moderado e delicioso aroma cítrico, herbal e fresco. Uma cerveja de sabor marcante com coloração dourado brilhante e se destaca pela potência dos lúpulos utilizados na etapa de Dry Hopp.',
        image: 'images/IPA.png'
    },
    {
        id: 9,
        name: 'SESSION IPA',
        category: 'Amargo / Intenso',
        description: 'Uma IPA mais leve, refrescante e lupulada na medida. Amarga e saborosa com altíssimo drinkability. leva lúpulo mosaic na maturação.',
        image: 'images/SESSION-IPA.png'
    },
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
        'Suave / Leve': 'Suave / Leve',
        'Equilibrado': 'Equilibrado',
        'Amargo / Intenso': 'Amargo / Intenso'
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
            window.open(`https://wa.me/5542998038582?text=${encoded}`, '_blank');
            
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
    window.open(`https://wa.me/5542998038582?text=${encoded}`, '_blank');
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
