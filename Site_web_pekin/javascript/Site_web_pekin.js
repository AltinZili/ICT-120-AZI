/*  Projet: Site web Pékin
    Auteur: Altin Zili
    Date: 10.11.2019
    Version: 1.0
    Description: javascript de la page hébergement du site
*/


// fonction permet d'ajouter le numéro tapé dans l'input type number à la liste déroulante en rajoutant le texte "chambre n°" avant
function fnAddRooms(){
    lengthRooms = numberRooms.value.length
    extractRooms = numberRooms.value.substr(0, lengthRooms)
    newOption = document.createElement("option")
    selectRooms.appendChild(newOption)
    newOption.innerText = "chambre n°" + extractRooms
    document.getElementById('numberRooms').value = ""

}

// fonction permettant de supprimer la chambre sélectionnée de la liste déroulante des chambres
function fnDeleteRooms(){
    selectedRooms = selectRooms.selectedIndex
    selectRooms.removeChild(selectRooms[selectedRooms])
}

// fonction permettant d'ajouter un participant à la liste des participants
function fnAddParticipants(){
    lengthParticipants = textParticipants.value.length
    extractParticipants = textParticipants.value.substr(0, lengthParticipants)
    newOption = document.createElement("option")
    listParticipants.appendChild(newOption)
    newOption.innerText = extractParticipants
    document.getElementById('textParticipants').value = ""
}

// fonction permettant de supprimer le participant sélectionné de la liste des participants
function fnDeleteParticipants(){
    selectedParticipants = listParticipants.selectedIndex
    listParticipants.removeChild(listParticipants[selectedParticipants])
}

// fonction permettant d'afficher que la réservation a été confirmée à la date du jour au lieu du bouton valider
function fnGetConfirmation(){
    today = new Date()
    dd = String(today.getDate()).padStart(2, '0')
    mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    yyyy = today.getFullYear()
    today = dd + '/' + mm + '/' + yyyy
    buttonValidate.hidden = true
    labelConfirmation.innerText = "la réservation a été validée le " + today
    labelConfirmation.hidden = false

}

// fonction permettant d'appeler d'autres fonctions lorsque des événements "clique avec la souris" arrivent sur divers boutons
function init() {
    buttonAddParticipants.addEventListener("click", fnAddParticipants)
    buttonDeleteParticipants.addEventListener("click", fnDeleteParticipants)
    buttonAddRooms.addEventListener("click", fnAddRooms)
    buttonDeleteRooms.addEventListener("click", fnDeleteRooms)
    buttonValidate.addEventListener("click", fnGetConfirmation)
}

//lit tout l'html avant de lancer la fonction init
document, addEventListener("DOMContentLoaded", init)