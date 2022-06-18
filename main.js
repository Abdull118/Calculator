// Listen to each button and store value into variable
// Print value of each button to display
// add functionality for the operators
// figure out adding the clear button to clear display


let displayValue = []
let buttons = document.querySelectorAll('button')
buttons.forEach(b => buttonListener(b))

function buttonListener(button){
    let value = button.innerHTML
        if(value === '='){
            button.addEventListener('click', evaluate)
        }
        else{
            let updateFunction = () => updateValue(value)
            button.addEventListener('click', updateFunction)
        }
}

function evaluate(){
            displayValue = eval(displayValue)
            document.querySelector('#display').innerHTML = displayValue
}

function updateValue(char){
    displayValue += char
    document.querySelector('#display').innerHTML = displayValue
}

