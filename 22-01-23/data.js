const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const weekDays = ['Domingo', 'Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']

const getHours = () => {
    const data = document.getElementsByClassName('dataAtual')[0];
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const weekDay = weekDays[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
   
    data.innerHTML = `São Paulo, ${weekDay}, ${day} de ${month} de ${year} `
}

getHours();
