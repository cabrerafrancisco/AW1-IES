const cardsContainer = document.createElement("div");
cardsContainer.className = "cards-container";

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Precio: $${product.price}</p>
        <div class="quantity">
            <button class="decrease">-</button>
            <span class="quantity-value">0</span>
            <button class="increase">+</button>
        </div>
    `;
    cardsContainer.appendChild(card);
});

document.body.appendChild(cardsContainer);

// Funcionalidad de botones de cantidad
document.querySelectorAll(".card").forEach((card, index) => {
    const quantityValue = card.querySelector(".quantity-value");
    card.querySelector(".increase").addEventListener("click", () => {
        quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
    });
    card.querySelector(".decrease").addEventListener("click", () => {
        const current = parseInt(quantityValue.textContent);
        if (current > 0) quantityValue.textContent = current - 1;
    });
});
