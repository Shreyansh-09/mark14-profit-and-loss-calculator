var initialPrice = document.querySelector("#initial-price");
var quantityOfStocks = document.querySelector("#quantity-of-stocks");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputDiv = document.querySelector("#output");

function showOutput(msg){
    outputDiv.innerText = msg;
}

function calculateProfitandLoss(initial, quantity,current){
    if(current > initial){
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;

        showOutput('Hey, the profit is ${profit} and the percent is ${profitPercentage}%.');
    }

    else if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;

        showOutput('Hey, the loss is ${loss} and the percent is ${lossPercentage}%.');
    }
    else{
        showOutput("No pain no gain and no gain no pain.");
    }
}

function clickEventHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(quantityOfStocks.value);
    var cp = Number(currentPrice.value);
    calculateProfitandLoss(ip,qty,cp);
}

submitBtn.addEventListener("click", clickEventHandler);