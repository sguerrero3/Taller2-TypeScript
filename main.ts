import {Serie} from './serie.js';
import {series} from './data.js';

let seriesTable:HTMLElement = document.getElementById("series-Table")!;

let card:HTMLElement = document.getElementById("card")!;

mostrarSeries(series);

let btn1:HTMLElement = document.getElementById("1")!;
let btn2:HTMLElement = document.getElementById("2")!;
let btn3:HTMLElement = document.getElementById("3")!;
let btn4:HTMLElement = document.getElementById("4")!;
let btn5:HTMLElement = document.getElementById("5")!;
let btn6:HTMLElement = document.getElementById("6")!;


btn1.onclick = () => {mostrarCard(series[0])!;};
btn2.onclick = () => {mostrarCard(series[1])!;};
btn3.onclick = () => {mostrarCard(series[2])!;};
btn4.onclick = () => {mostrarCard(series[3])!;};
btn5.onclick = () => {mostrarCard(series[4])!;};
btn6.onclick = () => {mostrarCard(series[5])!;};

function mostrarCard(serie: Serie):void{

    card.getElementsByTagName("div")[0].remove();
    let newCard:HTMLElement = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("style", "width: 20rem;");

    console.log(serie.poster);

    newCard.innerHTML= `<img class="card-img-top" src=${serie.poster} alt="Series cover"/>
                        <div class="card-body">
                        <h5 class="card-title">${serie.name}</h5>
                        <p class="card-text">${serie.description}</p>
                        <a href=${serie.watch}>${serie.watch}</a>
                        </div>`
    card.appendChild(newCard);

}


function mostrarSeries(series: Serie[]):void{

    let seriesTbody:HTMLElement = document.createElement("tbody");
    let average:number = 0;
    
    for(let serie of series){

        let trElement:HTMLElement = document.createElement("tr");

        trElement.innerHTML = `<td class="table-active">${serie.index}</td>
                               <td class="table-active"><button type="button" class="btn btn-link text-left" id = "${serie.index}">${serie.name}</button></td>
                               <td class="table-active">${serie.channel}</td>
                               <td class="table-active">${serie.seasons}</td>`;

        seriesTbody.appendChild(trElement);

        average += serie.seasons;
    }

    let trAverage:HTMLElement = document.createElement("tr")
    trAverage.innerHTML = `<td colspan="4">Season average: ${average/series.length}</td>`
    seriesTbody.appendChild(trAverage);
    seriesTable.appendChild(seriesTbody);

    
}


