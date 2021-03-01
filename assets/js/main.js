// Creo due variabili con prompt per visualizzare età e km

var km = prompt("Quanti chilometri percorrerai?");

document.getElementById('km').innerHTML = km;

var eta = parseInt(prompt("Quanti anni hai?"));

document.getElementById('eta').innerHTML = eta;
// Calcolo il costo del Biglietto

var costo = (km * 0.21);


// Sconti per i passegeri

// Under
var underCosto = ((costo * 20) / 100 );


// Over
var overCosto = ((costo * 40) / 100)

// Inserisco le variabili nelle condizioni


if (eta < 18) {
  document.getElementById('biglietto').innerHTML = underCosto;
} else if (eta >= 65) {
  document.getElementById('biglietto').innerHTML = overCosto;
} else {
  document.getElementById('biglietto').innerHTML = costo;
}
