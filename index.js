// const { createElement } = require("react");
const Form = document.getElementById("form");
const On_Road_Price = document.getElementById("On_Road_Price");
const Down_Payment = document.getElementById("Down_Payment");
const HP = document.getElementById("HP");
const DC = document.getElementById("DC");
const gross_sell = document.getElementById("gross_sell");
const Charges = document.getElementById("Charges");
const Disbursed_Loan_Amount = document.getElementById("Disbursed_Loan_Amount");
const PayOut = document.getElementById("PayOut");
const Tenure = document.getElementById("Tenure");
const EMI = document.getElementById("emi");

// Down_Payment.addEventListener("blur", ()=>{
//     Disbursed_Loan_Amount.textContent = On_Road_Price.value - Down_Payment.value;
// })

let Amount = 0;

Form.addEventListener("change", ()=>{
    console.log("changes done");
     Disbursed_Loan_Amount.textContent = On_Road_Price.value - Down_Payment.value;
     DC.value = Math.round(Disbursed_Loan_Amount.textContent*3/100);
     Amount = parseInt(Disbursed_Loan_Amount.textContent) + parseInt(DC.value) + parseInt(PayOut.value) + parseInt(HP.value) + parseInt(gross_sell.value) + parseInt(Charges.value);
     console.log(Amount);
});

Form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const TotalAmount = Math.round(Amount + (Amount*Tenure.value/100));
     console.log(TotalAmount)
     EMI.textContent = Math.round(TotalAmount / Tenure.value);
     console.log(EMI.value);
     EMI.style.backgroundColor = "lightGreen";
     EMI.style.color = "red";
});


