function init() {
    const btnSubmit = document.getElementById('submit');
    btnSubmit.addEventListener('click', submit);
}

function submit(event) {
    event.preventDefault();
    const element = document.getElementById('element');
    const text = document.getElementById('text');
    let inputValue = element.value;
    const specialSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (specialSymbol.test(inputValue)) {
        text.style.color = 'red';
    } else {
        if (!inputValue) {
            inputValue = 'Please input a Value';
            text.style.color = 'red';
        } else if (inputValue.length >= 3) {
            text.style.color = 'green';
        } else {
            text.style.color = 'black';
        }
    }
    text.innerText = inputValue;
    element.value = '';
}

init();