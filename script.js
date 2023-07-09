setTimeout(cambiaMensaje,2300)
function cambiaMensaje(){
    document.getElementById("loading_message").innerText = "Abrazo enviado"
}
setTimeout(function alerta1(){
    var nombre = "Jimmy";
    alert(nombre + " te ha enviado un abrazo!");
}, 2400);
