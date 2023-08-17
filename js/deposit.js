// step-1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field 
    // for input field, use .value to the value inside the input field 
    const depositField =document.getElementById('deposit-ammount');
    const newDepositAmmountString =depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

       // step-7: clear the deposit field 
       depositField.value ='';

       if(isNaN(newDepositAmmount)){
           alert('Please Provide a valid Number');
           return;
       }

    // step-3: get the current deposit total 
    // for non input( element other  than  input , textarea) use innerText to get text 
    const depositTotalElement = document.getElementById('deposit-total');
    const perviousDepositTotalString = depositTotalElement.innerText;
    const perviousDepositTotal = parseFloat(perviousDepositTotalString);

    // step-4: add numbers to set the total deposit 
    const currentDepositTotal = perviousDepositTotal + newDepositAmmount;
    // set the deposit total 
    depositTotalElement.innerText =  currentDepositTotal;


    //  step-5: get balance current total  
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString =balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    // set the current total balance 
    balanceTotalElement.innerText = currentBalanceTotal;

    
})
