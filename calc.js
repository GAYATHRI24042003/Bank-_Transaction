document.addEventListener('DOMContentLoaded', function () {
    const depositBtn = document.getElementById('deposit-btn');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const depositAmountElem = document.getElementById('deposit-amount');
    const withdrawAmountElem = document.getElementById('withdraw-amount');
    const balanceAmountElem = document.getElementById('balance-amount');

    depositBtn.addEventListener('click', function () {
        const inputDeposit = document.getElementById('input-deposit');
        const depositAmount = parseFloat(inputDeposit.value);

        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert('Please enter a valid deposit amount.');
            return;
        }

        const currentDeposit = parseFloat(depositAmountElem.innerText);
        const newDeposit = currentDeposit + depositAmount;
        depositAmountElem.innerText = newDeposit.toFixed(2);

        const currentBalance = parseFloat(balanceAmountElem.innerText);
        const newBalance = currentBalance + depositAmount;
        balanceAmountElem.innerText = newBalance.toFixed(2);

        inputDeposit.value = '';
    });

    withdrawBtn.addEventListener('click', function () {
        const inputWithdraw = document.getElementById('input-withdraw');
        const withdrawAmount = parseFloat(inputWithdraw.value);

        if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
            alert('Please enter a valid withdraw amount.');
            return;
        }

        const currentBalance = parseFloat(balanceAmountElem.innerText);

        if (withdrawAmount > currentBalance) {
            alert("Can't withdraw more than current balance.");
            return;
        }

        const currentWithdraw = parseFloat(withdrawAmountElem.innerText);
        const newWithdraw = currentWithdraw + withdrawAmount;
        withdrawAmountElem.innerText = newWithdraw.toFixed(2);

        const newBalance = currentBalance - withdrawAmount;
        balanceAmountElem.innerText = newBalance.toFixed(2);

        inputWithdraw.value = '';
    });
});
