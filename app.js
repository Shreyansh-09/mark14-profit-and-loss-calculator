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
        var profitPercentage = (((current - initial)/initial)*100).toFixed(2);

        showOutput(`Hey, the profit is ${profit} and the percent is ${profitPercentage}%.`);
    }

    else if(initial > current){
        var loss = (initial - current)*quantity;
        var lossPercentage = (((initial - current)/initial)*100).toFixed(2);

        showOutput(`Hey, the loss is ${loss} and the percent is ${lossPercentage}%.`);
    }
    else{
        showOutput("No pain no gain and no gain no pain.");
    }
}

function clickEventHandler(){
    var ip = initialPrice.value;
    var qty = quantityOfStocks.value;
    var cp = currentPrice.value;
    if(ip == "" || qty == "" || cp == ""){
        outputDiv.innerText = "Please Enter something in fields. "
    }
    else if(Number(ip) <= 0 || Number(qty) <= 0 || Number(cp) <= 0){
        outputDiv.innerText = "Field value must be greater than 0. "
    }
    else{
        calculateProfitandLoss(Number(ip),Number(qty),Number(cp));
    }
    
}

submitBtn.addEventListener("click", clickEventHandler);