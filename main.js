const darkModeBtn = document.getElementById('dark-mode');
const lightModeBtn = document.getElementById('light-mode');
const calculator = document.getElementById('calculator');
const btnClear = document.querySelectorAll('.btn-clear');
const btnOperations = document.querySelectorAll('.btn-operations');
const btnNums = document.querySelectorAll('.btn-nums');
const monitor = document.getElementById('monitor')

darkModeBtn.addEventListener('click', function() {

    darkModeBtn.style.display = 'none'
    lightModeBtn.style.display = 'block'

    calculator.style.background = 'var(--bg-calculator-dark)'
    monitor.style.color = 'var(--clr-input-dark)'


    for (let btn of btnClear) {
        btn.style.background = 'var(--bg-btn-clear-dark)'
        btn.style.color = 'var(--clr-btn-clear-dark)'
    }
    for (let btn of btnOperations) {
        btn.style.background = 'var(--bg-btn-operation-dark)'
        btn.style.color = 'var(--clr-btn-operation-dark)'
    }
    for (let btn of btnNums) {
        btn.style.background = 'var(--bg-btn-nums-dark)'
        btn.style.color = 'var(--clr-btn-nums-dark)'
    }
})

lightModeBtn.addEventListener('click', function() {

    lightModeBtn.style.display = 'none'
    darkModeBtn.style.display = 'block'

    calculator.style.background = 'var(--bg-calculator-light)'
    monitor.style.color = 'var(--clr-input-light)'
    
    for (let btn of btnClear) {
        btn.style.background = 'var(--bg-btn-clear-light)'
        btn.style.color = 'var(--clr-btn-clear-light)'
    }
    for (let btn of btnOperations) {
        btn.style.background = 'var(--bg-btn-operation-light)'
        btn.style.color = 'var(--clr-btn-operation-light)'
    }
    for (let btn of btnNums) {
        btn.style.background = 'var(--bg-btn-nums-light)'
        btn.style.color = 'var(--clr-btn-nums-light)'
    }
})

let btns = document.querySelectorAll('.btns')
for (let btn of btns) {
    btn.addEventListener('click', function() {
        monitor.value += btn.textContent
})
}

function clearMonitor() {
    monitor.value = ''
}

function deleteLast() {
    monitor.value = monitor.value.slice(0, -1)
}

function calculate() {
    try {
        monitor.value = eval(monitor.value)
    }
    catch (error) {
        monitor.value = 'Syntax ERROR'
    }
}