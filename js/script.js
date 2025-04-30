// Récupération des références des balises

const body = document.querySelector("body");
const mainPage = document.querySelector("main");
const titleApp = document.querySelector("h1");
const sectionForm = document.getElementById("sectionForm");
let inputNumber = document.querySelector("form input.inputNumber");
let optionTable = document.querySelectorAll("input[type='radio']")
let sectionResultat = document.querySelector("#sectionResult");
let ulResult = document.querySelector("#sectionResult ul");
let li = document.querySelectorAll("ul li");
let messageError = document.createElement("div");
sectionResultat.parentNode.removeChild(sectionResultat);


// Ajout des contenues pour le Titre et le premier paragraphe
titleApp.textContent = "TABLE_CALCUL";
const paragrapheOne = document.querySelector("section header p");
paragrapheOne.textContent = "Affichez les tables de Multiplication, Division, Soustraction et Addition";

// Variables des opérandes
const myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let nombre;

function appTable () {

    // Récupérer la valeur du champ à chaque fois que l'utilisateur change sa valeur
    inputNumber.addEventListener("change", function() {
        nombre = Number(inputNumber.value);

        // Si le champ n'a pas des valeurs, un message d'erreur s'affichera
        if (inputNumber.value === "") {
            sectionForm.appendChild(sectionResultat);
            ulResult.parentNode.removeChild(ulResult);
            messageError.textContent = "Désolé! Veillez remplir le champ vide.";
            messageError.style.color = "red";
            sectionResultat.appendChild(messageError);

        }else {
            sectionForm.appendChild(sectionResultat);
            sectionResultat.appendChild(ulResult);
            messageError.parentNode.removeChild(messageError);
        }
    })

    // Parcourir toutes les buttons radio afin de récupérer leurs valeurs, ensuite éffectuer des calculs à chaque fois que l'utilisateur choisi son option de calcul
    for (let i = 0; i < optionTable.length; i++) {
        optionTable[i].addEventListener("click", function(even){

            // Test du choix de l'utilisateur parmi les tables disponibles et affichage de la table correspondante
                switch (even.target.value) {
                    // Si l'utilisateur choisi la Multiplication, alors la table de Multiplication s'affichera
                    case "multiplication":
                        multiplicationTable();
                    break
                    // Si l'utilisateur choisi la Division, alors la table de Division s'affichera
                    case "division":
                        divisionTable();
                    break
                    // Si l'utilisateur choisi l'Addition, alors la table d'Addition s'affichera
                    case "addition":
                        additionTable();
                    break
                    // Si l'utilisateur choisi la Soustraction, alors la table de Soustraction s'affichera
                    case "soustraction":
                        soustractionTable();
                    break
                    // Rédemander l'utilisateur de choisir la Table à afficher si le nom de la Table ne correspond pas
                    default :
                        // demandeChoix();
                    break
                }
        })
    }
}

// Affichage de la table de Multiplication
const multiplicationTable = function() {
    let multiplication;
    for (let i = 0; i < myNumbers.length; i++) {
        multiplication = ( nombre * myNumbers[i] )
        li[i].textContent = nombre + " * " + myNumbers[i] + " = " + multiplication;
    }
    return multiplication;
}

// Affichage de la table de Division
const divisionTable = function() {
    let division;
    for (let i = 0; i < myNumbers.length; i++) {
        division = ( nombre / myNumbers[i] )
        li[i].textContent = nombre + " / " + myNumbers[i] + " = " + division;
    }
    return division
}

// Affichage de la table d'Addition
const additionTable = function() {
    let addition;
    for(let i = 0; i < myNumbers.length; i++) {
        addition = ( nombre + myNumbers[i] );
        li[i].textContent = nombre + " + " + myNumbers[i] + " = " + addition;
    }
    return addition;
}

// Affichage de la table de Soustraction
const soustractionTable = function() {
    let soustraction;
    for (let i = 0; i < myNumbers.length; i++) {
        soustraction = ( nombre - myNumbers[i] )
        li[i].textContent = nombre + " - " + myNumbers[i] + " = " + soustraction;
    }
    return soustraction
}