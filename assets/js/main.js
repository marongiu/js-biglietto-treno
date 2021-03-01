// Creo due variabili con prompt per visualizzare età e km

var km = prompt("Quanti chilometri percorrerai?");

var eta = parseInt(prompt("Quanti anni hai?"));

// Calcolo il costo del Biglietto

var costo = (km * 0.21);

console.log(costo, eta);


// Sconti per i passegeri

// Under
var under = (18);

var underCosto = ((costo * 20) / 100 );


// Over

var over = (65);

var overCosto = ((costo * 40) / 100)



// Inserisco le variabili nelle condizioni


if (eta < under) {
  console.log(underCosto);
} else if (eta > 65) {
  console.log(overCosto);
} else {
  console.log("Non sei compreso tra queste due eta");
}
