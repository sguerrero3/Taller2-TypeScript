import { series } from './data.js';
var seriesTable = document.getElementById("series-Table");
var card = document.getElementById("card");
mostrarSeries(series);
var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var btn5 = document.getElementById("5");
var btn6 = document.getElementById("6");
btn1.onclick = function () { mostrarCard(series[0]); };
btn2.onclick = function () { mostrarCard(series[1]); };
btn3.onclick = function () { mostrarCard(series[2]); };
btn4.onclick = function () { mostrarCard(series[3]); };
btn5.onclick = function () { mostrarCard(series[4]); };
btn6.onclick = function () { mostrarCard(series[5]); };
function mostrarCard(serie) {
    card.getElementsByTagName("div")[0].remove();
    var newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("style", "width: 20rem;");
    console.log(serie.poster);
    newCard.innerHTML = "<img class=\"card-img-top\" src=".concat(serie.poster, " alt=\"Series cover\"/>\n                        <div class=\"card-body\">\n                        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                        <p class=\"card-text\">").concat(serie.description, "</p>\n                        <a href=").concat(serie.watch, ">").concat(serie.watch, "</a>\n                        </div>");
    card.appendChild(newCard);
}
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var average = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-active\">".concat(serie.index, "</td>\n                               <td class=\"table-active\"><button type=\"button\" class=\"btn btn-link text-left\" id = \"").concat(serie.index, "\">").concat(serie.name, "</button></td>\n                               <td class=\"table-active\">").concat(serie.channel, "</td>\n                               <td class=\"table-active\">").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        average += serie.seasons;
    }
    var trAverage = document.createElement("tr");
    trAverage.innerHTML = "<td colspan=\"4\">Season average: ".concat(average / series.length, "</td>");
    seriesTbody.appendChild(trAverage);
    seriesTable.appendChild(seriesTbody);
}
