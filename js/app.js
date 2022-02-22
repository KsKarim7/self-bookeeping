// // catching catchId through function 
function catchId(id){
    return document.getElementById(id)
}

function getValue(fieldId, isInput){

    const inputField = document.getElementById(fieldId);
    let valueInText = ' ';
    if(isInput == true){
        valueInText = inputField.value;  
    }
    else{
        valueInText = inputField.innerText;
    }
    const value = parseFloat(valueInText);
    return value;
}



catchId('calculate-button').addEventListener('click',function(){
    // income field 
    const totalIncome = getValue('total-income',true);    
    // food expenses 
    const foodExpense = getValue('food-expense',true);

    // rent expense
    const rentExpense = getValue('rent-expense',true);

    // clothes expense
    const clothExpense = getValue('cloth-expense',true);    

    // update total expense     
    const totalExpense = foodExpense + rentExpense + clothExpense;
    document.getElementById('total-expense').innerText = totalExpense;
    
    if(totalExpense < totalIncome){
        const balance = totalIncome - totalExpense;
        catchId('balance').innerText = balance;
    }
    else{
        const failError = catchId('expense-error');    
        failError.classList.remove('d-none');
        failError.classList.add('d-block');
        // alert('expense is higher than your actual income')

    }
    
    // console.log(totalExpense);
    // console.log(balance);
    
    // clear expenses inputs 
    // foodExpense.value = ' ';
    // rentExpense.value = ' ';
    // clothExpense.value = ' ';
    

    
   
})

catchId('save-button').addEventListener('click',function(){
    const savingAmount = getValue('saving-amount',true);
    
    let savedAmount = getValue('saved-amount');
    
    const totalIncome2 = getValue('total-income',true);

    const finalSavedAmount2 =  totalIncome2 * savingAmount / 100;
    catchId('saved-amount').innerText = finalSavedAmount2; 

    const remainingBalance = getValue('remaining-balance');
    const previousBalance = getValue('balance');
        let finalSavedAmount = getValue('saved-amount');
    const finalRemainingBalance = previousBalance - finalSavedAmount;
    // console.log(finalRemainingBalance);

    if(finalSavedAmount < previousBalance){
            
        console.log(finalRemainingBalance);
            
        catchId('remaining-balance').innerText = finalRemainingBalance;
    }
    else{
        const errorMessage = catchId('saving-fail');    
        errorMessage.classList.remove('d-none');
        errorMessage.classList.add('d-block');

    }
    
    


    

})


// comparing total savings with the remaining balance 
// function remainder(){
//     const remaining = parseFloat(catchId('balance').innerText);

//     const savings = catchId('saved-amount');

//     const balance = catchId("remaining-balance")
//     console.log('balance');

//     if(savings < balance){
//         const balanceRemain =  balance - savings ;
        

//     }
//     remaining.innerText = balanceRemain;
// }



// function verifyInputs(){
//     const failMessage = catchId('saving-fail');
//     const failError = catchId('excess-expense');
    
//     const remainder =catchId('remaining-balance').innerText;
//     const savings = catchId('saved-amount').innerText;

//     if(savings > remainder){
//         failMessage.style.display = 'none';
//         failError.style.display = 'block'
        
//     }
//     else{
//         failMessage.style.display = 'block';
//         failError.style.display = 'block'

//     }

// }
// function verifyOtherInputs(){
//     const failMessage = catchId('saving-fail');
//     const income = catchId('total-income');
//     const expenseMessage = catchId('total-expense').innerText;
//     const failError = catchId('excess-expense');

//     if(expenseMessage > income){
//         failMessage.style.display = 'block';
//         failError.style.display = 'none'
        
//     }
//     else{
//         failMessage.style.display = 'block';
//         failError.style.display = 'block';

//     }


// }

