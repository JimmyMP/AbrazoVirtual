setTimeout(cambiaMensaje,1500)
function cambiaMensaje(){
    document.getElementById("loading_message").innerText = "Un poco más..."
}
setTimeout(cambiaMensaje2,2500)
function cambiaMensaje2(){
    document.getElementById("loading_message").innerText = "Un poquito más..."
}
setTimeout(cambiaMensaje3,3500)
function cambiaMensaje3(){
    document.getElementById("loading_message").innerText = "Un poquitititito más..."
}
setTimeout(cambiaMensaje4,4500)
function cambiaMensaje4(){
    document.getElementById("loading_message").innerText = "Flor Amarilla Enviada"
}
setTimeout(cambiarSVG, 4500);


setTimeout(function alerta1(){
    var nombre = "Jimmy";
    alert(nombre + " te dice: Para que te recuperes :3");
}, 5300);

// Función para cambiar el SVG después del proceso
function cambiarSVG() {
    const svgObject = document.getElementById('svg-object');
    if (svgObject) {
        svgObject.setAttribute('data', 'Canola-Plant.svg');
    }
}

// Llamada a la función después de que termine el proceso
// Supongamos que el proceso tarda 2 segundos (2000 milisegundos)
setTimeout(cambiarSVG, 6000);
