<!-- Auteur: Altin
     Projet: Examen-ICT120
     Date: 15.11.2019
-->


//lit tout l'html avant de lancer la fonction init
document, addEventListener("DOMContentLoaded", init)

function fnExtractNames{
    firstNameLength = textFirstName.value.length
    extractFirstName = textFirstName.value.substr(0, firstNameLength)
    lastNameLength = textLastName.value.length
    extractLastName = textLastName.value.substr(0, lastNameLength)
    spanFirstName.value = extractFirstName
    spanLastName.value = extractLastName
}

function fnPasSuffisammentcarac{
    AreaEcrireLength = AreaEcrire.value.length
    if (AreaEcrireLength < 130 ) {
        spanNumber.innerText = 130 - AreaEcrireLength
    }
}

function init(){
    submitEnvoyer.addEventListener("click", fnExtractNames)
    AreaEcrire.addEventListener("keyup", fnPasSuffisammentcarac)
}
