//aqui toma categoria segun url
const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get("category");

const filteredProducts = products.filter((product) => product.category === categoryName);

const cardsContainer = document.querySelector(".cards-container");

document.title = `MundoTec - ${categoryName}`;
const categoryTitle = document.getElementById("category-title");
categoryTitle.textContent = `${categoryName}`;

// creamos las cards
if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price}</p>
            <button class="buy-button" data-id="${product.id}">Comprar</button>
        `;

        cardsContainer.appendChild(card);
    });
} else {
    cardsContainer.innerHTML = "<p>No hay productos en esta categoría.</p>";
}

