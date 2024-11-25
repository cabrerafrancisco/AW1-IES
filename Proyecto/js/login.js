document.getElementById("loginButton").addEventListener("click", function () {
    const user = document.getElementById("user").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password && user) {
        sessionStorage.setItem("user", user); // user logueado
        window.location.href = "index.html";
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
