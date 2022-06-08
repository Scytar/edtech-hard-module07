const dateInput = document.querySelector("#dateInput");
const checkButton = document.querySelector("#checkButton");
const resultDay = document.querySelector("#resultDay");
const resultMonth = document.querySelector("#resultMonth");
const resultYear = document.querySelector("#resultYear");
const resultWeek = document.querySelector("#resultWeek");
const resultMonthString = document.querySelector("#resultMonthString");
const timeStamp = document.querySelector("#timeStamp");

checkButton.addEventListener("click", printDate);

function printDate() {
    const dateFromInput = new Date(dateInput.value);
    const dateYear = dateFromInput.getFullYear();
    const dateMonth = dateFromInput.getMonth();
    // Add 1 to day due to UTC-3 diff
    const dateDay = dateFromInput.getDate()+1;
    const dateWeek = dateFromInput.getDay();
    const dateTimeStamp = Date.parse(dateFromInput);

    resultDay.style.opacity = 1;
    resultMonth.style.opacity = 1;
    resultYear.style.opacity = 1;
    resultMonthString.style.opacity = 1;
    resultWeek.style.opacity = 1;
    timeStamp.style.opacity = 1;
    
    if (isNaN(dateDay)) {
        resultDay.innerHTML = "Insira uma data válida!"
        resultMonth.innerHTML = "Insira uma data válida!"
        resultYear.innerHTML = "Insira uma data válida!"
        resultMonthString.innerHTML = "Insira uma data válida!"
        resultWeek.innerHTML = "Insira uma data válida!"
        timeStamp.innerHTML = "Insira uma data válida!"
    } else {
        resultDay.innerHTML = "Dia " + dateDay;

        resultMonth.innerHTML = "Mês " + (dateMonth + 1);

        resultYear.innerHTML = "Ano " + dateYear;

        switch (dateMonth) {
            case 0:
                resultMonthString.innerHTML = "Janeiro";
                break;
            case 1:
                resultMonthString.innerHTML = "Fevereiro"
                break;
            case 2:
                resultMonthString.innerHTML = "Março"
                break;
            case 3:
                resultMonthString.innerHTML = "Abril"
                break;
            case 4:
                resultMonthString.innerHTML = "Maio"
                break;
            case 5:
                resultMonthString.innerHTML = "Junho"
                break;
            case 6:
                resultMonthString.innerHTML = "Julho"
                break;
            case 7:
                resultMonthString.innerHTML = "Agosto"
                break;
            case 8:
                resultMonthString.innerHTML = "Setembro"
                break;
            case 9:
                resultMonthString.innerHTML = "Outubro"
                break;
            case 10:
                resultMonthString.innerHTML = "Novembro"
                break;
            case 11:
                resultMonthString.innerHTML = "Dezembro"
                break;
            default:
                resultMonthString.innerHTML = "Insira uma data válida!"
                break;
        }

        switch (dateWeek) {
            case 0:
                resultWeek.innerHTML = "Segunda-Feira";
                break;
            case 1:
                resultWeek.innerHTML = "Terça-Feira"
                break;
            case 2:
                resultWeek.innerHTML = "Quarta-Feira"
                break;
            case 3:
                resultWeek.innerHTML = "Quinta-Feira"
                break;
            case 4:
                resultWeek.innerHTML = "Sexta-Feira"
                break;
            case 5:
                resultWeek.innerHTML = "Sábado"
                break;
            case 6:
                resultWeek.innerHTML = "Domingo"
                break;
            default:
                resultWeek.innerHTML = "Insira uma data válida!"
                break;
        }
        timeStamp.innerHTML = "Time Stamp: " + dateTimeStamp + " ms";
    }
    
}
