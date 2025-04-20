// Récupération des références des balises

const body = document.querySelector("body");
const mainPage = document.querySelector("main");
const titleApp = document.querySelector("h1");
const sectionForm = document.getElementById("sectionForm");
let listChoixTable = document.querySelector("form input.inputNameTable");
let inputNumber = document.querySelector("form input.inputNumber");
let ulResult = document.querySelector("#sectionResult ul");
let li = document.querySelectorAll("ul li");


// Ajout des contenues pour le Titre et le premier paragraphe
titleApp.textContent = "TABLE_CALCUL";
const paragrapheOne = document.querySelector("section header p");
paragrapheOne.textContent = "Affichez les tables de Multiplication, Division, Soustraction et Addition";

// Application pour les tables de la multiplication, division, addition et soustraction
const myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let nombre;

// Demander l'utilisateur de choisir la Table à afficher
let choix = prompt("Choisissez la table: Multiplication, Divison, Addition ou Soustraction");

// Rédemander l'utilisateur de choisir la Table à afficher si le nom de la Table ne correspond pas
function demandeChoix () {
    while (choix !== "Multiplication" && choix !== "Divison" && choix !== "Addition" && choix !== "Soustraction") {
        choix = prompt("Choisissez la table: Multiplication, Divison, Addition ou Soustraction");
    };
}

// Affichage de la table de Multiplication
const multiplicationTable = function() {
    let multiplication;
    for (let i = 0; i < myNumbers.length; i++) {
        multiplication = (nombre * myNumbers[i])
        li[i].textContent = nombre + " * " + myNumbers[i] + " = " + multiplication;
    }
    return multiplication;
}

// Affichage de la table de Division
const divisionTable = function() {
    let division;
    for (let i = 0; i < myNumbers.length; i++) {
        division = ( nombre / myNumbers[i] )
        li[i].textContent = nombre + " : " + myNumbers[i] + " = " + division;
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

// Test du choix de l'utilisateur parmi les tables disponibles et affichage de la table correspondante

function testChoixUtilisateur() {
    switch (choix) {
        // Si l'utilisateur choisi la Multiplication, alors la table de Multiplication s'affichera
        case "Multiplication":
            nombre = Number(prompt("Entrez une valeur :"));
            multiplicationTable();
        break
        // Si l'utilisateur choisi la Division, alors la table de Division s'affichera
        case "Division":
            nombre = Number(prompt("Entrez une valeur :"));
            divisionTable();
        break
        // Si l'utilisateur choisi l'Addition, alors la table d'Addition s'affichera
        case "Addition":
            nombre = Number(prompt("Entrez une valeur :"));
            additionTable();
        break
        // Si l'utilisateur choisi la Soustraction, alors la table de Soustraction s'affichera
        case "Soustraction":
            nombre = Number(prompt("Entrez une valeur :"));
            soustractionTable();
        break
        // Rédemander l'utilisateur de choisir la Table à afficher si le nom de la Table ne correspond pas
        default :
            demandeChoix();
        break
    }
}



function appOpen() {
    testChoixUtilisateur();
}