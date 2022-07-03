currentState = "";
operationInProgress = false;

function addToResult(e) {
    var results = document.querySelector('.results .text');
    var operation = document.querySelector('.operators');
    if (e.target.parentNode.className == "orange-buttons" || e.target.className == "module") {
        currentState += e.target.innerHTML;
        operationInProgress = true;
        operation.innerHTML = e.target.innerHTML;
    }
    else if (operationInProgress){
        results.innerHTML = e.target.innerHTML;
        currentState += e.target.innerHTML;
        operationInProgress = false;
    }
    else {
        currentState += e.target.innerHTML;
        results.innerHTML += e.target.innerHTML;
    }
}

function clearResult() {
    var results = document.querySelector('.results .text');
    var operation = document.querySelector('.operators');
    results.innerHTML = '';
    currentState = '';
    operation.innerHTML = '';
}

function giveResult() {
    var results = document.querySelector('.results .text');
    var operation = document.querySelector('.operators');
    try {
        if (currentState < 1 || results.innerHTML === "Error") {
            results.innerHTML = '';
            currentState = '';
        }
        else{
            results.innerHTML = eval(currentState);
        }
    }
    catch(e) {
        results.innerHTML = 'Error';
        currentState = '';
    }
    finally{
        operation.innerHTML = '';
    }
}
