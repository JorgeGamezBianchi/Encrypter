
const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const clean = document.querySelector("#btnClean");
const copy = document.querySelector('#copy');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );
// clean.addEventListener("click", function() { location.reload();  });

function encriptar(traduccion){
    document.querySelector("#msjAlert").removeAttribute("style");
    var textarea = document.querySelector("#txtArea");
    const texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#txtOut");
    if (texto != ""){
        var out = ""
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#msjAlert").style.color = "red";
                document.querySelector("#msjAlert").style.fontSize = "20px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("hideOut");
                area_result.classList.add("hideOut");
                return;
            }
            if(texto[i] == 'a'){
                out += traduccion["a"];
            }
            else if(texto[i] == 'e'){
                out += traduccion["e"];
            }
            else if(texto[i] == 'i'){
                out += traduccion["i"];
            }
            else if(texto[i] == 'o'){
                out += traduccion["o"];
            }
            else if(texto[i] == 'u'){
                out += traduccion["u"];
            }
            else{
                out += texto[i];
            }
        }
        area_default.classList.add("hideOut");
        area_result.classList.remove("hideOut");
        texto_out.innerHTML = out;
    }
    return;
}

function desencriptar(traduccion){
    document.querySelector("#msjAlert").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#txtOut");
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#msjAlert").style.color = "red";
                document.querySelector("#msjAlert").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("hideOut");
                area_result.classList.add("hideOut");
                return;
            }
        }
        area_default.classList.add("hideOut");
        area_result.classList.remove("hideOut");
        texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
        texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
        texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
        texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
        texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
        texto_out.innerHTML = texto;
    }
    return;
}

function clipboard(){
    const texto_out = document.querySelector("#txtOut");
    navigator.clipboard.writeText(texto_out.value);
}

function CleanForm() {
    var formulario = document.querySelector('.formEncryptor');
    formulario.reset();
    return;
}


  

