const navbar = document.createElement("nav");

// navbar y el username
navbar.innerHTML = `
    <a href="#"><img src="img/icono-tienda.png" style="height: 80px;"></a>
    <ul>
        ${navItems
            .map(item => `<li><a href="${item.link}">${item.title}</a></li>`)
            .join("")}
        <li id="user-name"></li>
    </ul>
`;

document.body.insertBefore(navbar, document.body.firstChild);

// Mostramos el nombre del usuario si está logueado
const user = sessionStorage.getItem("user");
if (user) {
    const userNameElement = document.getElementById("user-name");
    userNameElement.textContent = `Hola, ${user}`;
}
