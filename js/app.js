document.getElementById('calculate-button').addEventListener('click',function(){



    // food expenses 
    const foodExpense = document.getElementById('food-expense');
    const foodExpenseAmountText = foodExpense.value;
    const newFoodExpenseAmount = parseFloat(foodExpenseAmountText);
    console.log(newFoodExpenseAmount);

    // rent expense
    const rentExpense = document.getElementById('rent-expense');
    const rentExpenseAmountText = rentExpense.value;
    const newRentExpenseAmount = parseFloat(rentExpenseAmountText);
    console.log(newRentExpenseAmount);

    // clothes expense
    const clothExpense = document.getElementById('cloth-expense');
    const clothExpenseAmountText = clothExpense.value;
    const newClothExpenseAmount = parseFloat(clothExpenseAmountText);
    console.log(newClothExpenseAmount);

    // update total expense 
    const totalExpense = document.getElementById('total-expense');
    const previousTotalExpenseText = totalExpense.innerText;
    const previousTotalExpense = parseFloat(previousTotalExpenseText);
    const newTotalExpense = newFoodExpenseAmount + newRentExpenseAmount + newClothExpenseAmount;

    totalExpense.innerText = newTotalExpense;

    const totalIncome = document.getElementById('total-income');
    const totalIncomeAmountText = totalIncome.value;
    const presentTotalIncomeAmount = parseFloat(totalIncomeAmountText);
    console.log(presentTotalIncomeAmount);

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceAmountText = remainingBalance.innerText;
    const previousRemainingBalanceAmount = parseFloat(remainingBalanceAmountText);
    const newRemainingBalance = presentTotalIncomeAmount - newTotalExpense;
    
    remainingBalance.innerText = newRemainingBalance;


    // clear expenses inputs 
    foodExpense.value = ' ';
    rentExpense.value = ' ';
    clothExpense.value = ' ';
    totalIncome.value = ' ';

    
   
})

document.getElementById('save-button').addEventListener('click',function(){
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.value;
    const savingAmountNumber = parseFloat(savingAmountText);
    console.log(savingAmountNumber);

    const savedAmount = document.getElementById('saved-amount');
    const savedAmountText = savedAmount.innerText;
    const savedAmountNumber = parseFloat(savedAmountText);
    console.log(savedAmountNumber);

    const totalIncome = document.getElementById('total-income');
    const totalIncomeAmountText = totalIncome.value;
    const presentTotalIncomeAmount = parseFloat(totalIncomeAmountText);
    console.log(presentTotalIncomeAmount);

    const finalSavedAmount =  presentTotalIncomeAmount * savingAmountNumber / 100;
    
    savedAmount.innerText = finalSavedAmount;

    
    
})

function catchID (id){
    return document.getElementById(id)



}
