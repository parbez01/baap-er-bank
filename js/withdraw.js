// add event handler
//step:1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    // step:2 get the withdraw amount from the withdraw input feild
    const withdrawFeild = document.getElementById('withdraw-feild');
    const newWithdrawAmountString = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

    // step:3
    const withdrawTotalElement =  document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawAmount);

    // step:4
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step:5 get the previous value total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal);

    // step:6 calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    // step:7 clear the input feild
    withdrawFeild.value = '';

})