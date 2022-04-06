const billAmount = document.querySelector("#bill-amount");
const btnCheck = document.querySelector("#btn-check");
const cashGiven = document.querySelector("#cash-given");
const errorMsg = document.querySelector("#error-msg");

btnCheck.addEventListener("click", function validateBillAndCash() {
    errorMsg.style.display = "none";
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {

        }
        else {
            printError("cash given is lesser than bill amount");
        }

    }
    else {
        printError("bill should be greater than 0");
    }
})

function printError(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}

