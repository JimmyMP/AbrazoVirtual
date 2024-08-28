setTimeout(cambiaMensaje,1500)
function cambiaMensaje(){
    document.getElementById("loading_message").innerText = "Un poco más..."
}
setTimeout(cambiaMensaje2,3000)
function cambiaMensaje2(){
    document.getElementById("loading_message").innerText = "Esta cariñoso..."
}
setTimeout(cambiaMensaje3,4500)
function cambiaMensaje3(){
    document.getElementById("loading_message").innerText = "Un poquitititito más..."
}
setTimeout(cambiaMensaje4,6000)
function cambiaMensaje4(){
    document.getElementById("loading_message").innerText = "Tulipanes Enviados"
}
setTimeout(cambiarSVG, 7500);


// Función para cambiar el SVG después del proceso
function cambiarSVG() {
    const svgObject = document.getElementById('svg-object');
    if (svgObject) {
        svgObject.setAttribute('data', 'Tulipanes.svg');
    }
}
setTimeout(function alerta1(){
    var nombre = "Jimmy";
    alert(nombre + " te dice: Que te quiere mucho");
}, 8300);
// Llamada a la función después de que termine el proceso
// Supongamos que el proceso tarda 2 segundos (2000 milisegundos)
setTimeout(cambiarSVG, 9000);
