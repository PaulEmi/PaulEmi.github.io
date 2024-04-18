var bouton = document.getElementById("myButton"); // Récupérer le bouton
var fenetre = document.querySelector(".fenetre"); // Récupérer l'élément à modifier

var fenetre1 = document.querySelector(".fenetre1"); 
var bouton1 = document.getElementById("myButton1");

var fenetre2 = document.querySelector(".fenetre2"); 
var bouton2 = document.getElementById("myButton2");

var fenetre3 = document.querySelector(".fenetre3"); 
var bouton3 = document.getElementById("myButton3");

bouton.onclick = function() { fenetre.classList.add("ouvert"); }

bouton1.onclick = function() { fenetre1.classList.add("ouvert1"); }

bouton2.onclick = function() { fenetre2.classList.add("ouvert2"); }

bouton3.onclick = function() { fenetre3.classList.add("ouvert3"); } 


///////////////////////////////////////////////


fenetre.onclick = function(e) {
    if (e.target.isSameNode(fenetre))
    fenetre.classList.remove("ouvert");
};

fenetre1.onclick = function(e) {
    if (e.target.isSameNode(fenetre1))
    fenetre1.classList.remove("ouvert1");
};

fenetre2.onclick = function(e) {
    if (e.target.isSameNode(fenetre2))
    fenetre2.classList.remove("ouvert2");
};

fenetre3.onclick = function(e) {
    if (e.target.isSameNode(fenetre3))
    fenetre3.classList.remove("ouvert3");
};



////////////////////////////////////

var downloadButton = document.getElementById("btn-telecharger-CV");


// Ajouter un gestionnaire d'événements au clic sur le bouton
downloadButton.addEventListener("click", function() {
    // Créer un élément de lien pour le téléchargement du PDF
    var link = document.createElement("a");
    link.href = "./images/CV_Paul-Emile_Becquart.pdf"; // Chemin vers le fichier PDF
    link.download = "CV_Paul-Emile_Becquart.pdf"; // Nom du fichier à télécharger
    // Simuler un clic sur le lien pour déclencher le téléchargement
    link.click();
});


var downloadButton = document.getElementById("btn-telecharger-LM");

downloadButton.addEventListener("click", function() {
    var link = document.createElement("a");
    link.href = "./images/Lettre_de_motivation.pdf"; 
    link.download = "Lettre_de_motivation.pdf"; 
    link.click();
});

