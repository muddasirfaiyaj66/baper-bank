// step-1: add event listener to the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click',function(){
      // step-2: get the withdraw amount from the withdraw input field 
    // for input field, use .value to the value inside the input field 
    const withdrawField = document.getElementById('withdraw-ammount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmountString);
     // step-7: clear the deposit field 
     withdrawField.value ='';

    if(isNaN(newWithdrawAmmount)){
        alert('Please Proide a valid Number');
        return;
    }

     // step-3: get the current withdraw total 
    // for non input( element other  than  input , textarea) use innerText to get text 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   

      //  step-5: get balance current total  
      const balanceTotalElement = document.getElementById('total-balance');
      const previousBalanceTotalString =balanceTotalElement.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceTotalString);
      
      if(newWithdrawAmmount > previousBalanceTotal){
        alert('Baper Bank e eto Taka nai!!!');
        return;
      }
       // step-4: add numbers to set the total withdraw
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
     // set the deposit total 
     withdrawTotalElement.innerText = currentWithdrawTotal;
      // step-6: calculate current total balance 
      const currentBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
       // set the current total balance 
       balanceTotalElement.innerText = currentBalanceTotal;
      
})