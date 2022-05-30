// // catching catchId through function 
function catchId(id) {
    return document.getElementById(id)
}


// function for input valuess
function getValue(fieldId, isInput) {

    const inputField = catchId(fieldId);
    let valueInText = ' ';
    if (isInput == true) {
        valueInText = inputField.value;
    }
    else {
        valueInText = inputField.innerText;
    }
    const value = parseFloat(valueInText);
    return value;
}


// calculating all the expenses 
catchId('calculate-button').addEventListener('click', function () {
    // income field 
    const totalIncome = getValue('total-income', true);
    (totalIncome, 'total-income')
    // food expenses 
    const foodExpense = getValue('food-expense', true);

    // rent expense
    const rentExpense = getValue('rent-expense', true);

    // clothes expense
    const clothExpense = getValue('cloth-expense', true);

    // update total expense     
    const totalExpense = foodExpense + rentExpense + clothExpense;
    document.getElementById('total-expense').innerText = totalExpense;

    if (totalExpense < totalIncome) {
        const balance = totalIncome - totalExpense;
        catchId('balance').innerText = balance;
    }
    else {
        const failError = catchId('expense-error');
        failError.classList.remove('d-none');
        failError.classList.add('d-block');
        // alert('expense is higher than your actual income')

    }

    // clear expenses inputs 
    foodExpense.value = ' ';
    rentExpense.value = ' ';
    clothExpense.value = ' ';




})
// balance i want to save to from my total income 
catchId('save-button').addEventListener('click', function () {
    const savingAmount = getValue('saving-amount', true);

    let savedAmount = getValue('saved-amount');

    const totalIncome2 = getValue('total-income', true);

    const finalSavedAmount2 = totalIncome2 * savingAmount / 100;
    catchId('saved-amount').innerText = finalSavedAmount2;

    // final remaining balance after all the expenses and savings 
    const remainingBalance = getValue('remaining-balance');
    const previousBalance = getValue('balance');
    let finalSavedAmount = getValue('saved-amount');
    const finalRemainingBalance = previousBalance - finalSavedAmount;

    // error messages 
    if (finalSavedAmount < previousBalance) {



        catchId('remaining-balance').innerText = finalRemainingBalance;
    }
    else {
        const errorMessage = catchId('saving-fail');
        errorMessage.classList.remove('d-none');
        errorMessage.classList.add('d-block');

    }
})

