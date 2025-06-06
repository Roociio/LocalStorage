const btn=document.getElementById('boton')
const nombre=document.getElementById('nombre')
const contraseña=document.getElementById('contraseña')
const mensaje=document.getElementById('mensaje')

btn.addEventListener("click",function(){
const nombreValor=nombre.value //los valores de usuario y contraseña
const contraseñaValor=contraseña.value
const usuarioGuardado= JSON.parse(localStorage.getItem('usuario')) || {}//pasa el texto a objeto

if(!usuarioGuardado.nombre){//si no inicio sesion se registra
    const usuarioNuevo={
        nombre:nombreValor,
        contraseña:contraseñaValor
    }
    localStorage.setItem('usuario', JSON.stringify(usuarioNuevo))//guarda los datos nuevos
    mensaje.textContent="Usuario registrado"
    return
}else{//y si ya inicio sesion tiene que ingresar
    if(
        nombreValor === usuarioGuardado.nombre &&
        contraseñaValor === usuarioGuardado.contraseña
    ){
        mensaje.textContent="Bienvenido "+nombreValor//si coincide ingresa
    }else{mensaje.textContent="Error"}//si no sale error
}
})