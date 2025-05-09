const nombre=document.getElementById("nombre");
const contraseña=document.getElementById("contraseña");
const boton=document.getElementById("boton");
const mensaje=document.getElementById("mensaje");

const nombreOriginal="rocio";
const contraseñaOriginal="12345";

nombre.value = localStorage.getItem("nombre") || "";//y esto rellena  si hay datos 
contraseña.value = localStorage.getItem("contraseña") || "";

boton.addEventListener("click",function(){//al apretar el boton se guardan los datos y pasa todo esto
    if (nombre.value === nombreOriginal && contraseña.value === contraseñaOriginal) {//se fija si los datos son correctos
        mensaje.textContent = "¡Bienvenida, " + nombreOriginal + "!";
        localStorage.setItem("nombre", nombre.value);
        localStorage.setItem("contraseña", contraseña.value);
    }else {
        mensaje.textContent = "Datos incorrectos. Volve a intentar.Puto el que lee";
    }
     
})