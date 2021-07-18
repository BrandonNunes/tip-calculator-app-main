const inputValor = document.getElementById("valor");
const numberPeople = document.querySelector(".people");
const peopleValue = numberPeople.value;   


function calc(){
    let billValue = inputValor.value;
    let peopleValue = numberPeople.value;
    let totalPenson = (billValue / peopleValue);
    
    const msg = document.querySelector(".cant");
    if(peopleValue == 0){
       
         let totalPensonValue = document.querySelector(".totalvalue").textContent = '$0.00';
        msg.classList.add("zero");
        numberPeople.classList.add("zero");
        setTimeout(()=>{
            const msg = document.querySelector(".cant");
            msg.classList.remove("zero");
            numberPeople.classList.remove("zero");
            totalPensonValue = document.querySelector(".totalvalue").textContent = '$0.00';
        },3000)
        }else{
            let totalPensonValue = document.querySelector(".totalvalue").textContent = '$' + totalPenson.toFixed(2);
        }
   
   if(totalPensonValue.textContent == '$' + Number){
    totalPensonValue = document.querySelector(".totalvalue").textContent = billValue;
}

calTip(0);

}
function calTip(t){
    let billValue = inputValor.value;
    let peopleValue = numberPeople.value;
    let totalPenson = (billValue / peopleValue);

    const tipValue = document.querySelector(".tipvalue");
    const tips = document.querySelectorAll(".tipBtn");
   
        let tipAmount = totalPenson*(t/100);
        tipValue.textContent = '$' + tipAmount.toFixed(2);
        let totalPensonValue = document.querySelector(".totalvalue").textContent = '$' + (tipAmount+totalPenson).toFixed(2);
}
function customTip(){
    const custom = document.getElementById("custom");
    let customValue = custom.value;
    let billValue = inputValor.value;
    let peopleValue = numberPeople.value;
    let totalPenson = parseFloat(billValue / peopleValue);

    const tipValue = document.querySelector(".tipvalue");
    
   
        let tipAmount = totalPenson*(customValue/100);
        tipValue.textContent = '$' + tipAmount.toFixed(2);
        let totalPensonValue = document.querySelector(".totalvalue").textContent = '$' + (tipAmount+totalPenson).toFixed(2);
}

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    const tipValue = document.querySelector(".tipvalue").textContent = '$0.00';
    let totalPensonValue = document.querySelector(".totalvalue").textContent = '$0.00';
    const inputValor = document.getElementById("valor").value = "";
    const numberPeople = document.querySelector(".people").value = "";
    const custom = document.getElementById("custom").value = "";
})
