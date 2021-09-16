﻿function calcolaConto() {
     let checkBoxes = document.querySelectorAll("input[type='checkbox']");

     
     let priceData = document.querySelectorAll("td.price");

     let bill = 0.0;

     for (let i = 0; i < checkBoxes.length; i++) {
         if (checkBoxes[i].checked) {
             bill += parseInt(priceData[i].innerHTML)
         }
     }

     if (bill != 0.0)
         localStorage.setItem("conto", bill);
     else {
         alert("Non hai selezionato nessuna pizza!");
         let Ok = document.getElementById("Ok");
         Ok.setAttribute("href", "MenuPizzeria.html");
     }
}

function inserisciCarta() {
    let cardInput = document.getElementById("codiceCarta");

    let scegliContanti = document.querySelector("select[value='1']");
    let scegliCarta = document.querySelector("select[value='2']");

    if ("select[value='1']") {
        cardInput.style.display = "";
    }
    else if (scegliContanti.checked) {
        cardInput.style.display = "none"
    }
}

function mostraConto() {
    
    let billPar = document.getElementById("bill");

    let bill = localStorage.getItem("conto");

    billPar.innerHTML = "Totale conto: " + bill + "€";
}