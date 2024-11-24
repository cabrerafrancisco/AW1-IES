const navbar = document.createElement("nav");
navbar.innerHTML = `
    <a href="#"><img src="img/icono-tienda.png" style="height: 80px;"></a>
    <ul>
        ${navItems
            .map(item => `<li><a href="${item.link}">${item.title}</a></li>`)
            .join("")}
    </ul>
`;
document.body.insertBefore(navbar, document.body.firstChild);
