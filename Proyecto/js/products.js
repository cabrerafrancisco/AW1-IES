//almacena la url que le pegamos
const productsUrl = "/data/products.json";

// aqui la funcion inicia la pag
async function initPage() {
    try {
        // tomar productos
        const response = await fetch(productsUrl);
        const products = await response.json();

        // detecta categoria (cel,tv,etc)
        const urlParams = new URLSearchParams(window.location.search);
        const categoryName = urlParams.get("category");

        // aqui filtro si por URL le mandamos una categoria o no
        if (categoryName) {
            const filteredProducts = products.filter(product => product.category === categoryName);
            displayProducts(filteredProducts);
            updatePageTitle(categoryName);
        } else {
            displayProducts(products);
        }
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}

// Cards que copie de cards.js anterior
function displayProducts(products) {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = ""; 

    if (products.length === 0) {
        cardsContainer.innerHTML = "<p>No hay productos en esta categoría.</p>";
        return;
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-header">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="card-body">
                <h3>${product.name}</h3>
                <p class="card-description">${product.description}</p>
                <p class="card-price">Precio: <strong>$${product.price}</strong></p>
            </div>
            <div class="card-footer">
                <div class="quantity">
                    <button class="quantity-btn bajar">-</button>
                    <span class="quantity-value">1</span>
                    <button class="quantity-btn subir">+</button>
                </div>
                <button class="add-carrito" data-id="${product.id}">Añadir al carrito</button>
            </div>
        `;
        cardsContainer.appendChild(card);
    });

    attachButtonEvents();
}

// alert de + / - / agregr a carritos
function attachButtonEvents() {
    document.querySelectorAll(".card").forEach(card => {
        const quantityValue = card.querySelector(".quantity-value");

        card.querySelector(".subir").addEventListener("click", () => {
            quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
        });

        card.querySelector(".bajar").addEventListener("click", () => {
            const current = parseInt(quantityValue.textContent);
            if (current > 1) quantityValue.textContent = current - 1;
        });

        card.querySelector(".add-carrito").addEventListener("click", () => {
            alert("Producto añadido al carrito");
        });
    });
}

// titulo segun categorias
function updatePageTitle(categoryName) {
    document.title = `MundoTec - ${categoryName}`;
    const categoryTitle = document.getElementById("category-title");
    if (categoryTitle) {
        categoryTitle.textContent = categoryName;
    }
}

// Inicializar la página
document.addEventListener("DOMContentLoaded", initPage);
