//step:1 add event listner to the deposite to the button
document.getElementById('btn-deposite').addEventListener('click',function(){
    // console.log('love')
    
    //step:2 get the deposite amount from thr deposite input feild
    // for input feild use .value to the value inside the input feild
    const depositeFeild = document.getElementById('deposite-feild');
    const NewDepositeAmountString = depositeFeild.value;
    const newDepositeAmount = parseFloat(NewDepositeAmountString);
    // console.log(depositeAmount);
    
    // step:3 get the current deposite total
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    //step:4 add number to set deposite
    const CurrentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = CurrentDepositeTotal;

    // step 5:get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step:6:calculate current balance total
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    
    // clear the deposite feild
    depositeFeild.value = '';
})
