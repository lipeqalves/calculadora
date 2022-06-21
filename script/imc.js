const calcular = document.querySelector("#cal");
const peso =  document.querySelector("#peso");
const altura =  document.querySelector("#altura");
const resultado =  document.querySelector("#result");

calcular.addEventListener('click', (e)=>{
    e.preventDefault();
 
        if(validaPeso(peso.value) && validaAltura(altura.value)){
            return  resultado.value = calculoImc(peso.value,altura.value);
        }else{
            return resultado.value = "Informação invalida";
            
        }
        
    //console.log(resultado.value);
})

function calculoImc(peso, altura){
    const imc =  peso / (altura * altura);
    //console.log(imc.toFixed(2));
    return imc.toFixed(2);
}


function validaPeso(peso) {
    if (peso > 0 && peso < 600) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}