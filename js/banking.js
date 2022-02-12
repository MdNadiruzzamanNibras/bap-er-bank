// getInput 
function getInputamount(inputValue){
    const inputField = document.getElementById(inputValue);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    inputField.value ='';
    return inputAmount;
}
// getUpdate 
function getUpdateAmount(inputAmount, amount){
    const totalAmount = document.getElementById(inputAmount,amount);
    const totalAmountText = totalAmount.innerText;
    const previousAmount = parseFloat(totalAmountText)
    const  previousAmountTotal = previousAmount + amount;
    totalAmount.innerText = previousAmountTotal;
    return previousAmountTotal;
}

// currentBalance 
 function getCurrentBalance(){
     const totalBalance = document.getElementById('blance-total');
     const totalBalanceText = totalBalance.innerText;
     const previousBalance = parseFloat(totalBalanceText);
     return  previousBalance;
 }

// UpdateBalance 
function updateBalance (amount, isAdd){
    const totalBalance = document.getElementById('blance-total');
    const previousBalance = getCurrentBalance()
    if(isAdd == true){
        totalBalance.innerText = previousBalance + amount;
    }
    else {
        totalBalance.innerText = previousBalance - amount;
    }
}

document.getElementById('Deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputamount('deposit-input');
    if (withdrawAmount > 0)
   {getUpdateAmount('deposit-total', depositAmount);
   updateBalance (depositAmount, true);}
})
document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputamount('Withdraw-input');
  const currentBalance = getCurrentBalance()
  if (withdrawAmount > 0 && withdrawAmount < currentBalance)
   {getUpdateAmount('withdraw-total', withdrawAmount);
   updateBalance (withdrawAmount, false);}
})
