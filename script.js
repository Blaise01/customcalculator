const numberButtons = document.querySelectorAll('[data-num]');
const operationButtons = document.querySelectorAll('[data-op]');
const equalsButton = document.querySelector('[data-eq]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-del]');

let bracketSwitch = false;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const displayedData = document.getElementById("result");
        const displayedText = document.getElementById("result").textContent;
        displayedData.innerHTML = displayedText + button.textContent
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const displayedData = document.getElementById("result");
        const displayedText = document.getElementById("result").textContent;

        if (button.textContent === "()") {
            var bracket;

            if(!bracketSwitch){
                bracket = "("
            } else {
                bracket = ")"
            };
            
            bracketSwitch = !bracketSwitch;

            displayedData.innerHTML = displayedText + bracket
        } else {
            displayedData.innerHTML = displayedText + button.textContent
        }
    })
});

equalsButton.addEventListener('click', () => {
    const displayedData = document.getElementById("result");
    const displayedText = document.getElementById("result").textContent;
    const finalResult = Function("return " + displayedText)();

    if (displayedText === "31102006") {
        displayedData.innerHTML = "Made By Balázs Domján :)"
    } else {
        displayedData.innerHTML = finalResult
    }
});

clearButton.addEventListener('click', () => {
    const displayedData = document.getElementById("result");
    displayedData.innerHTML = ""
});

deleteButton.addEventListener('click', () => {
    const displayedData = document.getElementById("result");
    const displayedText = document.getElementById("result").textContent;
    const slicedText = displayedText.slice(0, -1);

    displayedData.innerHTML = slicedText
});

// LOADER
$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow")
})