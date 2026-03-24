// SoundHub Music - Basic JavaScript

let cart = [];

const products = [
    { id: 1, name: "Acoustic Guitar", price: 8999, icon: "🎸", rating: 5 },
    { id: 2, name: "Electric Keyboard", price: 12999, icon: "🎹", rating: 4 },
    { id: 3, name: "Drum Set", price: 24999, icon: "🥁", rating: 5 },
    { id: 4, name: "Ukulele", price: 3999, icon: "🎸", rating: 5 },
    { id: 5, name: "Sitar", price: 15999, icon: "🎵", rating: 4 },
    { id: 6, name: "Tabla Set", price: 5999, icon: "🥁", rating: 5 },
    { id: 7, name: "Electric Guitar", price: 18999, icon: "🎸", rating: 5 },
    { id: 8, name: "Saxophone", price: 22999, icon: "🎷", rating: 4 }
];

// Display products on page
function displayProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    products.forEach(product => {
        // Create star rating
        let stars = '';
        for (let i = 0; i < product.rating; i++) {
            stars += '★';
        }
        
        grid.innerHTML += `
            <div class="product-card">
                <div class="product-image">${product.icon}</div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-rating">${stars}</div>
                    <div class="product-price">Rs. ${product.price}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    });
}

// Add item to cart
function addToCart(id, name, price) {
    const found = cart.find(item => item.id === id);
    
    if (found) {
        found.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    updateCartCount();
}

// Update cart count
function updateCartCount() {
    const count = document.getElementById('cartCount');
    if (count) {
        count.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Open cart
function openCart() {
    let total = 0;
    let html = 'Shopping Cart\n\n';
    
    if (cart.length === 0) {
        html += 'Your cart is empty';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            html += `${item.name} × ${item.quantity} = Rs. ${itemTotal}\n`;
        });
        html += `\nTotal: Rs. ${total}`;
    }
    
    alert(html);
}

// Open login
function openLogin() {
    const email = prompt('Enter your email:');
    const password = prompt('Enter your password:');
    
    if (email && password) {
        alert('Login successful!');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartCount();
});

function validateForm(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    let errors = [];

    if (!email.includes("@")) {
        errors.push("Please enter a valid email.");
    }
    if (isNaN(phone) || phone.length < 7) {
        errors.push("Please enter a valid phone number.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Form submitted successfully!");
        event.target.reset();
    }
}
document.getElementById("contactForm").addEventListener("submit", validateForm);