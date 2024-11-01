// Fonction de conversion de température
function convertTemperature() {
    // Récupérer les valeurs saisies par l'utilisateur
    const temperature = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");

    // Vérifier si la saisie est valide
    if (temperature === "") {
        resultElement.innerText = "Veuillez entrer une température.";
        return;
    }

    let convertedTemp;
    let resultText;

    // Conversion de Celsius à Fahrenheit ou inversement
    if (unit === "celsius") {
        convertedTemp = (temperature * 9/5) + 32;
        resultText = `${temperature} °C est égal à ${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        resultText = `${temperature} °F est égal à ${convertedTemp.toFixed(2)} °C`;
    }

    // Afficher le résultat
    resultElement.innerText = resultText;
}

// Fonction de conversion de distance
function convertDistance() {
    // Récupérer les valeurs saisies par l'utilisateur
    const distance = document.getElementById("distance").value;
    const unit2 = document.getElementById("unit2").value;
    const result2Element = document.getElementById("result2");

    // Vérifier si la saisie est valide
    if (distance === "") {
        result2Element.innerText = "Veuillez entrer une distance.";
        return;
    }

    let convertedDist;
    let result2Text;

    // Conversion de Km à miles ou inversement
    if (unit2 === "km") {
        convertedDist = (distance * 0.621371);
        result2Text = `${distance} Km est égal à ${convertedDist.toFixed(2)} miles`;
    } else {
        convertedDist = (distance * 1.60934);
        result2Text = `${distance} miles est égal à ${convertedDist.toFixed(2)} Km`;
    }

    // Afficher le résultat
    result2Element.innerText = result2Text;
}

function faireCalcul(){
    const nbr1 = parseInt(document.getElementById("nbr1").value);
    const nbr2 = parseInt(document.getElementById("nbr2").value);
    const signe = document.getElementById("signe").value;
    const result3Element = document.getElementById("result3");
    const historique = document.getElementById("historique");
    p = document.createElement("p")
    if (isNaN(nbr1) || isNaN(nbr2)){
        result3Element.innerText = "Veuillez entrez un nombre dans les deux cases !";
        return;
    }

    let convertedCalcul;
    let result3Text;

    if (signe === "addition"){
        convertedCalcul = nbr1 + nbr2;
        result3Text = `Le résultat de ${nbr1} + ${nbr2} est ${convertedCalcul}`;
    } if(signe === "soustraction"){
        convertedCalcul = nbr1 - nbr2;
        result3Text = `Le résultat de ${nbr1} - ${nbr2} est ${convertedCalcul}`;
    } if(signe === "multiplication") {
        convertedCalcul = nbr1 * nbr2;
        result3Text = `Le résultat de ${nbr1} x ${nbr2} est ${convertedCalcul}`;
    } if(signe === "division") {
        convertedCalcul = nbr1 / nbr2;
        result3Text = `Le résultat de ${nbr1} ÷ ${nbr2} est ${convertedCalcul}`;
    }

    result3Element.innerText = result3Text;
    p.innerText = result3Text;
    historique.append(p);
}

function effacerNbr() {
    document.getElementById("nbr1").value = "";
    document.getElementById("nbr2").value = "";
}

function effacerHisto() {
    document.getElementById("historique").innerHTML = "";
}

function ajouterTache(){    
    const nom_tache = document.getElementById("nom_tache").value;
    const description_tache = document.getElementById("description_tache").value;
    const result4Element = document.getElementById("result4");
    const ajout_ligne = document.getElementById("ajout_ligne");
    

    if (nom_tache === ""){
        result4Element.innerText = "Veuillez entrer un nom de tâche !";
        return;
    }

    let tacheExiste = false;
    const lignes = ajout_ligne.getElementsByTagName("tr");
    for (let i = 0; i < lignes.length; i++) {
        const tdNom = lignes[i].getElementsByTagName("td")[0]; // Première cellule de chaque ligne (nom de tâche)
        if (tdNom && tdNom.textContent === nom_tache) {
            tacheExiste = true;
            break;
        }
    }

    if (tacheExiste) {
        result4Element.innerText = "La tâche existe déjà !";
        return;
    }

    // Réinitialiser le message d'erreur
    result4Element.innerText = "";

    // Créer une nouvelle ligne
    const tr = document.createElement("tr");

    // Cellule pour le nom de la tâche
    const tdNom = document.createElement("td");
    tdNom.textContent = nom_tache;

    // Cellule pour la description de la tâche
    const tdDescription = document.createElement("td");
    tdDescription.textContent = description_tache;

    // Cellule pour le statut initial "En cours"
    const tdStatut = document.createElement("td");
    tdStatut.textContent = "En cours";

    // Cellule pour le bouton "Changer le statut"
    const tdChangeStatus = document.createElement("td");
    const btnChangeStatus = document.createElement("button");
    btnChangeStatus.textContent = "Changer le statut";
    btnChangeStatus.className = "btn btn-warning btn-sm";
    btnChangeStatus.onclick = function() {
        if (tdStatut.textContent === "En cours") {
            tdStatut.textContent = "Complétée";
            tdStatut.classList.add("text-success");
            tdStatut.classList.remove("text-warning");
        } else {
            tdStatut.textContent = "En cours";
            tdStatut.classList.add("text-warning");
            tdStatut.classList.remove("text-success");
        }
    };
    tdChangeStatus.appendChild(btnChangeStatus);

    // Cellule pour le bouton "Supprimer"
    const tdDelete = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Supprimer";
    btnDelete.className = "btn btn-danger btn-sm";
    btnDelete.onclick = function() {
        tr.remove();
    };
    tdDelete.appendChild(btnDelete);

    // Ajouter les cellules à la ligne
    tr.appendChild(tdNom);
    tr.appendChild(tdDescription);
    tr.appendChild(tdStatut);
    tr.appendChild(tdChangeStatus);
    tr.appendChild(tdDelete);

    // Ajouter la ligne au tableau
    ajout_ligne.appendChild(tr);

    // Réinitialiser les champs de saisie
    document.getElementById("nom_tache").value = "";
    document.getElementById("description_tache").value = "";
}


