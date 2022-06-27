const calcular = document.querySelector("#cal");
const base =  document.querySelector("#base");
const num =  document.querySelector("#decimal");
const resultado =  document.querySelector("#result");
const msg = document.querySelector("#msgSaida");

calcular.addEventListener('click', (e)=>{
    e.preventDefault();
    if(base.value == 2){
        resultado.value = ConverteDecimal(num.value, base.value);
        msg.textContent =`Base ${base.value}`;
    }else if(base.value == 8){
        resultado.value = ConverteDecimal(num.value, base.value);
        msg.textContent =`Base ${base.value}`;
    }else if(base.value ==16){
        resultado.value = ConverteDecimal(num.value, base.value);
        msg.textContent =`Base ${base.value}`;
    }else{ 
        msg.textContent =`Erro: Base ${base.value}. não é possivel converter essa base`
     }
     
   base.value="";
   num.value="";

})

function ConverteDecimal(num,base){
    
    return (+num).toString(+base);
}
