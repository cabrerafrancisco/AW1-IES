document.getElementById("loginButton").addEventListener("click", function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //aqui validamos si estan los campos completos (problemas con required)
    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos antes de iniciar sesión.");
    } else {
        // inicia sesion falso
        window.location.href = "/index.html";
    }
});