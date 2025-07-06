// === Dark Mode Toggle ===
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// === Load saved dark mode preference ===
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }

  // === Load Cart Count ===
  updateCartCount();

  // === Show Newsletter Popup ===
  setTimeout(() => {
    const popup = document.getElementById('newsletter');
    if (popup) popup.classList.add('show');
  }, 4000);
});

// === CART SYSTEM ===
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Item added to cart!");
}

function updateCartCount() {
  const count = cart.length;
  const countSpan = document.getElementById("cart-count");
  if (countSpan) countSpan.textContent = count;
}

function removeFromCart(productId) {
  cart = cart.filter(id => id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCartCount();
}
