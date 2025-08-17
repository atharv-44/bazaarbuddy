// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links
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

// CTA Button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        // Scroll to products section if present
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .product-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease';
        observer.observe(el);
    });
});

// Product card click handlers - simplified
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        // Simple click effect
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 150);
    });
});

// Feature card hover effects - simplified
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.feature-icon');
        if (icon) icon.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.feature-icon');
        if (icon) icon.style.transform = 'scale(1)';
    });
});

// Social media icon hover effects - simplified
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Prevent default behavior for non-functional social links
document.querySelectorAll('.social-icon').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // You can add actual social media links here later
        console.log('Social media link clicked:', link.querySelector('i').className);
    });
});

// Auth tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update active form
        document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
        document.querySelector(`.${targetTab}-form`).classList.add('active');
    });
});

// Password toggle functionality
document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const input = toggle.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        toggle.classList.toggle('fa-eye');
        toggle.classList.toggle('fa-eye-slash');
    });
});

// Form handlers for login page
document.querySelector('.signin-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();
    
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }
    
    // For demo purposes - redirect to main website after successful login
    alert('Login successful! Redirecting to main website...');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});

document.querySelector('.signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const phone = this.querySelector('input[type="tel"]').value.trim();
    const password = this.querySelector('input[type="password"]').value.trim();
    
    if (!name || !email || !phone || !password) {
        alert('Please fill in all fields.');
        return;
    }
    
    // For demo purposes - redirect to main website after successful registration
    alert('Account created successfully! Redirecting to main website...');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});

// Social login handler
document.querySelector('.btn-social')?.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Google login successful! Redirecting to main website...');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});

// Demo-only form handler for login page (legacy support)
document.querySelector('.login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }
    alert('Login submitted. Replace with real authentication.');
});

// Add a simple form validation if you add forms later
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Utility function for smooth animations
function animateOnScroll(element, animation) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animation);
            }
        });
    });
    
    observer.observe(element);
}

// Add scroll-triggered animations for sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        animateOnScroll(section, 'fade-in');
    });
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Products Page Functionality
function initializeProductsPage() {
    // Products Data
    const products = [
        // Fresh Produce
        {
            id: 1,
            name: "Apples",
            category: "fresh-produce",
            categoryName: "Fresh Produce",
            price: 120,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Apples.avif"
        },
        {
            id: 2,
            name: "Tomatoes",
            category: "fresh-produce",
            categoryName: "Fresh Produce",
            price: 80,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Tomatoes.avif"
        },
        
        // Dairy & Eggs
        {
            id: 3,
            name: "Milk",
            category: "dairy-eggs",
            categoryName: "Dairy & Eggs",
            price: 60,
            stock: "Low stock",
            stockStatus: "low",
            image: "./images/Milk.jpg"
        },
        {
            id: 4,
            name: "Butter",
            category: "dairy-eggs",
            categoryName: "Dairy & Eggs",
            price: 45,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Butter.jpeg"
        },
        {
            id: 5,
            name: "Eggs",
            category: "dairy-eggs",
            categoryName: "Dairy & Eggs",
            price: 90,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Eggs.jpeg"
        },
        
        // Bakery & Snacks
        {
            id: 6,
            name: "Whole Wheat Bread",
            category: "bakery-snacks",
            categoryName: "Bakery & Snacks",
            price: 35,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Whole wheat bread.jpeg"
        },
        {
            id: 7,
            name: "Biscuits",
            category: "bakery-snacks",
            categoryName: "Bakery & Snacks",
            price: 25,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Biscuits.jpeg"
        },
        
        // Beverages
        {
            id: 8,
            name: "Tea",
            category: "beverages",
            categoryName: "Beverages",
            price: 150,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Tea.jpeg"
        },
        {
            id: 9,
            name: "Orange Juice",
            category: "beverages",
            categoryName: "Beverages",
            price: 80,
            stock: "Low stock",
            stockStatus: "low",
            image: "./images/Orange juice.jpg"
        },
        
        // Grains & Staples
        {
            id: 10,
            name: "Basmati Rice",
            category: "grains-staples",
            categoryName: "Grains & Staples",
            price: 180,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Basmati rice.jpeg"
        },
        
        // Oils & Spices
        {
            id: 11,
            name: "Cooking Oil",
            category: "oils-spices",
            categoryName: "Oils & Spices",
            price: 120,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Cooking oil.jpg"
        },
        {
            id: 12,
            name: "Turmeric Powder",
            category: "oils-spices",
            categoryName: "Oils & Spices",
            price: 95,
            stock: "In stock",
            stockStatus: "in",
            image: "./images/Turmeric.jpeg"
        }
    ];

    // Global variables
    let filteredProducts = [...products];
    let currentCategory = 'all';
    let searchQuery = '';

    // DOM elements
    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // Setup event listeners
    function setupEventListeners() {
        // Search functionality
        searchInput.addEventListener('input', handleSearch);
        searchBtn.addEventListener('click', handleSearch);
        
        // Category filtering
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', handleCategoryFilter);
        });
        
        // Enter key in search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // Handle search functionality
    function handleSearch() {
        searchQuery = searchInput.value.toLowerCase().trim();
        filterProducts();
    }

    // Handle category filtering
    function handleCategoryFilter(e) {
        // Remove active class from all buttons
        categoryBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        e.target.classList.add('active');
        
        // Update current category
        currentCategory = e.target.dataset.category;
        
        // Filter products
        filterProducts();
    }

    // Filter products based on search and category
    function filterProducts() {
        filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery);
            const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
            
            return matchesSearch && matchesCategory;
        });
        
        renderProducts();
    }

    // Render products to the grid
    function renderProducts() {
        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or category filter</p>
                </div>
            `;
            return;
        }
        
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">₹${product.price}</div>
                    <div class="product-stock">
                        <span class="stock-icon stock-${product.stockStatus}"></span>
                        <span class="stock-status stock-${product.stockStatus}">${product.stock}</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Add to cart functionality
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();

        // Show success message and animate button
        showNotification(`${product.name} added to cart!`, 'success');
        const button = event.target.closest('.add-to-cart-btn');
        if (button) {
            button.innerHTML = '<i class="fas fa-check"></i> Added!';
            button.style.background = '#4caf50';
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
                button.style.background = '#2e7d32';
            }, 2000);
        }
    };

    // Update cart badge
    function updateCartBadge() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartBadge.textContent = totalItems;
            cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    // Show notification
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#4caf50' : '#2196f3'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add performance optimization
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Debounce search input
    const debouncedSearch = debounce(handleSearch, 300);
    searchInput.addEventListener('input', debouncedSearch);

    // Initialize the products page
    renderProducts();
    setupEventListeners();
    updateCartBadge(); // Initial cart badge update
}

// Initialize products page if we're on the products page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('products.html')) {
        initializeProductsPage();
    }
    if (window.location.pathname.includes('cart.html')) {
        initializeCartPage();
    }

    // Update cart badge on all pages
    updateCartBadge();
});

// Cart Page Functionality
function initializeCartPage() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotalElement = document.getElementById('cart-subtotal');
    const cartTotalElement = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartContainer = document.querySelector('.cart-container');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const clearCartContainer = document.querySelector('.clear-cart-container');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge(); // Update badge whenever cart changes
    }

    function renderCart() {
        if (cart.length === 0) {
            if(emptyCartMessage) emptyCartMessage.style.display = 'block';
            if(cartContainer) cartContainer.style.display = 'none';
            if(clearCartContainer) clearCartContainer.style.display = 'none';
            return;
        }

        if(emptyCartMessage) emptyCartMessage.style.display = 'none';
        if(cartContainer) cartContainer.style.display = 'flex';
        if(clearCartContainer) clearCartContainer.style.display = 'flex';
        if(cartItemsContainer) cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
                    <div class="quantity-control">
                        <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
            `;
            if(cartItemsContainer) cartItemsContainer.appendChild(cartItem);
        });

        updateCartSummary();
        addEventListeners();
    }

    function updateCartSummary() {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        if(cartSubtotalElement) cartSubtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
        if(cartTotalElement) cartTotalElement.textContent = `₹${subtotal.toFixed(2)}`; // Assuming shipping is free
    }

    function addEventListeners() {
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                updateQuantity(id, -1);
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                updateQuantity(id, 1);
            });
        });

        document.querySelectorAll('.remove-item-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                removeFromCart(id);
            });
        });
        
        if(clearCartBtn) {
            clearCartBtn.addEventListener('click', () => {
                cart = [];
                saveCart();
                renderCart();
            });
        }
    }

    function updateQuantity(id, change) {
        const item = cart.find(i => i.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(id);
            } else {
                saveCart();
                renderCart();
            }
        }
    }

    function removeFromCart(id) {
        cart = cart.filter(i => i.id !== id);
        saveCart();
        renderCart();
    }

    // Initial render
    if (cartItemsContainer) {
        renderCart();
    }
}

// This function needs to be available globally if it's not already.
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartBadges = document.querySelectorAll('.cart-badge');
    if (cartBadges.length > 0) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadges.forEach(cartBadge => {
            cartBadge.textContent = totalItems;
            cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
        });
    }
} 