// Creo due variabili con prompt per visualizzare età e km

var km = prompt("Quanti chilometri percorrerai?");

document.getElementById('km').innerHTML = km + "km";

var eta = parseInt(prompt("Quanti anni hai?"));

document.getElementById('eta').innerHTML = eta;
// Calcolo il costo del Biglietto

var costo = (km * 0.21);
// Sconti per i passegeri
var under = ((costo * 20) / 100 );
var over = ((costo * 40) / 100);



// Under
var underCosto = (costo - under);


// Over
var overCosto = (costo - over);

// Inserisco le variabili nelle condizioni


if (eta < 18) {
  document.getElementById('biglietto').innerHTML =  Math.floor(underCosto) + "€";
} else if (eta >= 65) {
  document.getElementById('biglietto').innerHTML =  Math.floor(overCosto) + "€";
} else {
  document.getElementById('biglietto').innerHTML =  Math.floor(costo) + "€";
}
