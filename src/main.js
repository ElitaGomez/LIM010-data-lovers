/* Manejo del DOM */
const ingreso = document.getElementById("login");
const correo = document.getElementById("email");
const contraseña = document.getElementById("password");
const btningreso = document.getElementById("ingresa");

// creando la CONTRASEÑA: LABORATORIA
ingreso.addEventListener("click", (event) => {
  event.preventDefault();
  const contraseña = document.getElementById("password").value;
  if (contraseña === "LABORATORIA") {
    inicio.classList.add("hide");
    
    else if{
    
    document.getElementById("error").innerHTML = "contraseña incorrecta";
  }
});
