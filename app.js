var billAmount = document.querySelector("#bill-amount");
var btnCheck = document.querySelector("#btn-check");
var cashGiven = document.querySelector("#cash-given");
var errorMsg = document.querySelector("#error-msg");
var numOfNotesArr = document.querySelectorAll(".num-of-notes");

var availableNotes = [2000,500,100,20,10,5,1];

btnCheck.addEventListener("click", function validateBillAndCash() {
    hideMessage();
    if(Number(billAmount.value) > 0) {
        if( Number(cashGiven.value) >= Number(billAmount.value) ) {
            var amountToBeReturned = (Number(cashGiven.value)) - (Number(billAmount.value));
            calculateChange(amountToBeReturned); 
        }
        else {
            printError("cash given is lesser than bill amount");
        }

    }
    else {
        printError("bill should be greater than 0");
    }
})

function calculateChange(amountToBeReturned) {
    for(let i=0; i<availableNotes.length; i++) {
        var numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned%availableNotes[i];
        numOfNotesArr[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    errorMsg.style.display = "none";
}

function printError(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}

