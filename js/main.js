function gestionar_click(){
    //capturar el texto del usuario
    let texto_Usuario = document.querySelector('#texto-usuario').value; 
    let textoEncriptado = encriptarTexto(texto_Usuario);
    //capturar el parrafo encriptado 
    let etiquetaParrafo = document.querySelector('#texto-encriptado');
    etiquetaParrafo.innerHTML = textoEncriptado
    //ocultar caja normal y mostar caja encriptada
    document.querySelector('#caja-encriptada').classList.remove('oculto');
    document.querySelector('#caja-normal').classList.add('oculto');
    document.querySelector('#texto-usuario').value = "";    
}
function gestionar_otro_click(){
    //capturar el texto del usuario
    let texto_Usuario = document.querySelector('#texto-usuario').value; 
    let textoDesencriptado= desencriptar(texto_Usuario);
    //capturar el parrafo encriptado 
    let etiquetaParrafo = document.querySelector('#texto-encriptado');
    etiquetaParrafo.innerHTML = textoDesencriptado    
    //ocultar caja normal y mostar caja encriptada
    document.querySelector('#caja-encriptada').classList.remove('oculto');
    document.querySelector('#caja-normal').classList.add('oculto');
    document.querySelector('#texto-usuario').value = "";    
}

function gestionar_click_3(){
    let copyText = document.getElementById('texto-encriptado');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);    
    console.log("estas copiando el texto!!!")
}

function desencriptar(algun_texto){
    return algun_texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
}

function encriptarTexto(texto){
    return encriptar(texto)     
}

function encriptar_letra( letra ){
    switch (letra) {
        case "e":
            return "enter";
            break;
        case "i":
            return "imes";
            break;
        case "a":
            return "ai";
            break;
        case "o":
            return "ober";
            break;
        case "u":
            return "ufat";
            break;
    
        default:
            return letra;
            break;
    }
}

function encriptar(texto){
    return texto.split("").map( letra => encriptar_letra(letra) ).join("");
}