

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

function encriptar(){
    document.querySelector("#msjAlert").removeAttribute("style");
    var textarea = document.querySelector("#txtArea");
    const text = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var textOut = document.querySelector("#txtOut");
    if (text != ""){
        var out = ""
        for(var i=0; i < text.length; i++){
            if(((text[i] < 'a') || (text[i] > 'z')) && (text[i] != ' ')){
                document.querySelector("#msjAlert").style.color = "red";
                document.querySelector("#msjAlert").style.fontSize = "20px";
                return;
            }
            else if((text.length == 1 && text == " ") || text.replace(/ /g, "") == ""){
                area_default.classList.remove("hideOut");
                area_result.classList.add("hideOut");
                return;
            }
            if(text[i] == 'a')
                out += traduccion["a"];
            else if(text[i] == 'e')
                out += traduccion["e"];
            else if(text[i] == 'i')
                out += traduccion["i"];
            else if(text[i] == 'o')
                out += traduccion["o"];
            else if(text[i] == 'u')
                out += traduccion["u"];
            else
                out += text[i];
        }
        area_default.classList.add("hideOut");
        area_result.classList.remove("hideOut");
        textOut.innerHTML = out;
    }
    return;
}

function desencriptar(){
    document.querySelector("#msjAlert").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var text = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var textOut = document.querySelector("#txtOut");
    if (text != ""){
        for(var i=0; i < text.length; i++){
            if(((text[i] < 'a') || (text[i] > 'z')) && (text[i] != ' ')){
                document.querySelector("#msjAlert").style.color = "red";
                document.querySelector("#msjAlert").style.fontSize = "16px";
                return;
            }
            else if((text.length == 1 && text == " ") || text.replace(/ /g, "") == ""){
                area_default.classList.remove("hideOut");
                area_result.classList.add("hideOut");
                return;
            }
        }
        area_default.classList.add("hideOut");
        area_result.classList.remove("hideOut");
        text = text.replace(new RegExp(traduccion["a"], "g"), "a");
        text = text.replace(new RegExp(traduccion["e"], "g"), "e");
        text = text.replace(new RegExp(traduccion["i"], "g"), "i");
        text = text.replace(new RegExp(traduccion["o"], "g"), "o");
        text = text.replace(new RegExp(traduccion["u"], "g"), "u");
        textOut.innerHTML = text;
    }
    return;
}

function copyText(){
    const text_out = document.querySelector("#txtOut");
    navigator.clipboard.writeText(text_out.value);
}

function CleanForm() {
    var formulario = document.querySelector('.formEncryptor');
    formulario.reset();
    return;
}


  

