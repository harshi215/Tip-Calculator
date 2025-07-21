let billAmount = document.getElementById("billAmount");
let percentageTip =document.getElementById("percentageTip");
let errorMessage = document.getElementById("errorMessage");
let tipAmountInput = document.getElementById("tipAmount");
let totalAmountInput = document.getElementById("totalAmount");
let btn=document.getElementById('btn');
btn.onclick=()=>{

        tipAmountInput.value = parseInt(billAmount.value) * (parseInt(percentageTip.value) / 100);
         totalAmountInput.value = parseInt(billAmount.value)+ parseInt(tipAmountInput.value);
}