document.getElementById("registrarse").addEventListener("click", function (event) {
    //event.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const nacimiento = document.getElementById("nacimiento").value;

    if (!nombre || !apellido || !email || !pass || !nacimiento) {
        alert("Por favor, complete todos los campos del formulario.");
    } else {
        alert("Registro completado. Redirigiendo al login...");
        window.location.href = "login.html";
    }
});
