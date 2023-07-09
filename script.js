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
    document.getElementById("loading_message").innerText = "Abrazo enviado"
}
setTimeout(function alerta1(){
    var nombre = "Jimmy";
    alert(nombre + " te ha enviado un abrazo!");
}, 5300);
