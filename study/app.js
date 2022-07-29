import squareNumber from './square.js'

const inputNumber = document.querySelector('#inputNumber');

inputNumber.addEventListener('input', (e)=>{
    // console.log(e) //O evento em si
    // console.log(e.target) //O cara que ativou o evento
    // console.log(e.target.value) //O valor que está dentro do cara que ativou o evento
    console.log(squareNumber(e.target.value))
    console.log(squareNumber(inputNumber.value))
})

// const numero = squareNumber(100)
// console.log(numero);