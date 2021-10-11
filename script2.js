 function iniciar() {
btnCalcular = document.getElementById("btnCalcular");
      btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular() {

    
    var contador = 0;
    var porcentaje = 9.10;

    if(document.getElementById('cbox1').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox2').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox3').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox4').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox5').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox6').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox7').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox8').checked){
        window.location.href = "homepage.html";      
    }
    if(document.getElementById('cbox9').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox10').checked){
        contador=contador+1;      
    }
    if(document.getElementById('cbox11').checked){
        contador=contador+1;
  
    
    var Positivo = 6;
    var Negativo = 5;

    if(contador > Negativo){
    	window.location.href = "/homepage.html";
        }else{
            if(contador < Positivo){
            	window.location.href = "homepage.html";
             }

var boton = document.querySelector("#inputFormulario");
boton.addEventListener("submit", calcularLBS);
