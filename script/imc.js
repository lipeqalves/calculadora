const calcular = document.querySelector("#cal");
const peso =  document.querySelector("#peso");
const altura =  document.querySelector("#altura");
const resultado =  document.querySelector("#result");
const msg = document.querySelector("#msgSaida");

calcular.addEventListener('click', (e)=>{
    e.preventDefault();
 
        if(validaPeso(peso.value) && validaAltura(altura.value)){
            resultado.value = calculoImc(peso.value,altura.value); 
            msg.textContent = ""; 
        }else if(!validaPeso(peso.value)){
            msg.textContent = " De acordo com o Guinness World Records, o homem mais pesado da história tinha aproximadamente 597kg";
            resultado.value = "Novo Recorde!!!!";
        }else if(!validaAltura(altura.value)){
            msg.textContent = " De acordo com o Guinness World Records, O homem mais alto da história, atingiu a altura de 2,72 m";
            resultado.value = "Novo Recorde!!!!";
        }
    peso.value="";
    altura.value="";
    
})

function calculoImc(peso, altura){
    const imc =  peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0.5 && peso < 600) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0.3 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}