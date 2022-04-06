var billAmount = document.querySelector("#bill-amount");
var btnCheck = document.querySelector("#btn-check");
var cashGiven = document.querySelector("#cash-given");
var errorMsg = document.querySelector("#error-msg");

btnCheck.addEventListener("click", function validateBillAndCash() {
    hideMessage();
    console.log(billAmount.value);
    console.log(cashGiven.value);
    if(Number(billAmount.value) > 0) {
        console.log("INSIDE BILL AMOUNT");
        if( Number(cashGiven.value) >= Number(billAmount.value) ) {
            console.log("INSIDE CASHGIVEN");
            var amountToBeReturned = cashGiven.value - billAmount.value;
            // calculateChange(amountToBeReturned); 
        }
        else {
            printError("cash given is lesser than bill amount");
        }

    }
    else {
        printError("bill should be greater than 0");
    }
})

// function calculateChange() {

// }

function hideMessage() {
    console.log("HIDE MSG");
    errorMsg.style.display = "none";
}

function printError(message) {
    console.log("PRINT MSG");
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}

