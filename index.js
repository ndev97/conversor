function SegMin(){
    let min =  document.getElementById("segmin").value;
    let result;

    result = min / 60;

    if(isNaN(result)){
        document.getElementById("segmin").value = "";
        return alert("Solo numeros");
    }
    if(result == ""){
        return alert("Ingrese numeros");
    }

    if(Number.isInteger(result) && result == 1){
        document.getElementById("segmin").value = `${result} Minuto`;
    } else if(Number.isInteger(result)){
        document.getElementById("segmin").value = `${result} Minutos`;
    } else {
        document.getElementById("segmin").value = `${result.toFixed(2)} Minutos`;
    }
}

function SegHs(){
    let hs = document.getElementById("seghs").value;
    let result;

    result = (hs / 60) / 60;

    if(isNaN(result)){
        document.getElementById("seghs").value = "";
        return alert("Solo numeros");
    }
    if(result == ""){
        return alert("Ingrese numeros");
    }

    if(Number.isInteger(result) && result == 1){
        document.getElementById("seghs").value = `${result} Hora`;
    } else if(Number.isInteger(result)){
        document.getElementById("seghs").value = `${result} Horas`;
    } else {
        document.getElementById("seghs").value = `${result.toFixed(2)} Horas`;
    }
}


function SegD(){
    let dias = document.getElementById("segd").value;
    let result;

    result = ((dias / 60) / 60) /24;

    if(isNaN(result)){
        document.getElementById("segd").value = "";
        return alert("Solo numeros");
    }
    if(result == ""){
        return alert("Ingrese numeros");
    }

    if(Number.isInteger(result) && result == 1){
        document.getElementById("segd").value = `${result} Dia`;
    } else if(Number.isInteger(result)){
        document.getElementById("segd").value = `${result} Dias`;
    } else {
        document.getElementById("segd").value = `${result.toFixed(2)} Dias`;
    }
    
}


function SegSem(){
    let sem = document.getElementById("segsem").value;
    let result;

    result = (((sem /60) /60) /24) /7;

    if(isNaN(result)){
        document.getElementById("segsem").value = "";
        return alert("Solo Numeros");
    }
    if(result == ""){
        alert("Ingrese numeros");
    }

    if(Number.isInteger(result) && result == 1){
        document.getElementById("segsem").value = `${result} Semana`;
    } else if(Number.isInteger(result)){
        document.getElementById("segsem").value = `${result} Semanas`;
    } else {
        document.getElementById("segsem").value = `${result.toFixed(2)} Semanas`;
    }
}


function SegYear(){
    let year = document.getElementById("segyear").value;
    let result;

    result = (((year/60) /60) /24) /365;

    if(isNaN(result)){
        document.getElementById("segyear").value = "";
        return alert("Solo numeros");
    }
    if(result == ""){
        alert("Ingrese numeros");
    }

    if(Number.isInteger(result) && result == 1){
        document.getElementById("segyear").value = `${result} Año`;
    } else if(Number.isInteger(result)){
        document.getElementById("segyear").value = `${result} Años`;
    } else {
        document.getElementById("segyear").value = `${result.toFixed(5)} Años`;
    }
}
