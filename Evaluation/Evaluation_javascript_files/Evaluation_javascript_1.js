<!-- Auteur: Altin
     Projet: Examen-ICT120
     Date: 15.11.2019
-->

//lit tout l'html avant de lancer la fonction init
document, addEventListener("DOMContentLoaded", init)

//fonction contrôlant que le prénom fasse 2 caractères ou plus pour cacher
//le label "invalide" du prénom
function fnControlCharactersFirstName() {
    firstNameLength = textFirstName.value.length

    if ((firstNameLength < 3) && (firstNameLength > 0)) {
        labelInvalidFirstName.hidden = false
    }

    if (firstNameLength > 2) {
        labelInvalidFirstName.hidden = true
    }


    if (firstNameLength == ""){
        labelInvalidFirstName.hidden = true
    }
}

//fonction contrôlant que le nom fasse 2 caractères ou plus pour cacher
//le label "invalide" du nom
function fnControlCharactersLastname() {
    lastNameLength = textLastName.value.length

    if ((lastNameLength < 3) && (lastNameLength > 0)) {
        labelInvalidLastName.hidden = false
    }

    if (lastNameLength > 2) {
        labelInvalidLastName.hidden = true
    }

    if (lastNameLength == ""){
        labelInvalidLastName.hidden = true
    }
}

//fonction contrôlant que le mot de passe fasse 6 caractères ou plus pour cacher
//le label "invalide" du mot de passe
function fnControlCharactersPassword() {
    PasswordEntryLength = passwordEntry.value.length

    if ((PasswordEntryLength < 7) && (PasswordEntryLength > 0)) {
        labelInvalidPassword.hidden = false
    }

    if (PasswordEntryLength > 6) {
        labelInvalidPassword.hidden = true
    }

    if (PasswordEntryLength == ""){
        labelInvalidPassword.hidden = true
    }
}

//fonction contrôlant que le mot de passe mis dans confirmation
// soit le même que le mot de passe entrée en premier pour cacher
//pour cacher le label "invalide" du prénom
function fnControlValidPasswordConfirmation() {
    PasswordEntryLength = passwordEntry.value.length
    PasswordConfirmationLength = passwordConfirmation.value.length
    extractPasswordEntry = passwordEntry.value.substr(0, PasswordEntryLength)
    extractPasswordConfirmation = passwordConfirmation.value.substr(0, PasswordConfirmationLength)
    if(extractPasswordConfirmation != extractPasswordEntry){
        labelInvalidPasswordConfirmation.hidden = false
    } else{
        labelInvalidPasswordConfirmation.hidden = true
    }
}

//fonction contrôlant que tous les champs soit correctement taper pour activer le bouton envoyé
function fnSendInformations1(){
    firstNameLength = textFirstName.value.length
    lastNameLength = textLastName.value.length
    PasswordEntryLength = passwordEntry.value.length
    PasswordConfirmationLength = passwordConfirmation.value.length
    extractPasswordEntry = passwordEntry.value.substr(0, PasswordEntryLength)
    extractPasswordConfirmation = passwordConfirmation.value.substr(0, PasswordConfirmationLength)
    if((firstNameLength > 2) && (lastNameLength > 2) && (PasswordEntryLength > 6) && (extractPasswordConfirmation == extractPasswordEntry)){
        submitEnvoyer.disabled = false
    }else{
        submitEnvoyer.disabled = true
    }

}

//fonction contrôlant que tous les champs soit correctement taper pour activer le bouton envoyé
function fnSendInformations2(){
    firstNameLength = textFirstName.value.length
    lastNameLength = textLastName.value.length
    PasswordEntryLength = passwordEntry.value.length
    PasswordConfirmationLength = passwordConfirmation.value.length
    extractPasswordEntry = passwordEntry.value.substr(0, PasswordEntryLength)
    extractPasswordConfirmation = passwordConfirmation.value.substr(0, PasswordConfirmationLength)
    if((firstNameLength > 2) && (lastNameLength > 2) && (PasswordEntryLength > 6) && (extractPasswordConfirmation == extractPasswordEntry)){
        submitEnvoyer.disabled = false
    }else{
        submitEnvoyer.disabled=true
    }

}

//fonction contrôlant que tous les champs soit correctement taper pour activer le bouton envoyé
function fnSendInformations3(){
    firstNameLength = textFirstName.value.length
    lastNameLength = textLastName.value.length
    PasswordEntryLength = passwordEntry.value.length
    PasswordConfirmationLength = passwordConfirmation.value.length
    extractPasswordEntry = passwordEntry.value.substr(0, PasswordEntryLength)
    extractPasswordConfirmation = passwordConfirmation.value.substr(0, PasswordConfirmationLength)
    if((firstNameLength > 2) && (lastNameLength > 2) && (PasswordEntryLength > 6) && (extractPasswordConfirmation == extractPasswordEntry)){
        submitEnvoyer.disabled = false
    }else{
        submitEnvoyer.disabled=true
    }

}

//fonction contrôlant que tous les champs soit correctement taper pour activer le bouton envoyé
function fnSendInformations4(){
    firstNameLength = textFirstName.value.length
    lastNameLength = textLastName.value.length
    PasswordEntryLength = passwordEntry.value.length
    PasswordConfirmationLength = passwordConfirmation.value.length
    extractPasswordEntry = passwordEntry.value.substr(0, PasswordEntryLength)
    extractPasswordConfirmation = passwordConfirmation.value.substr(0, PasswordConfirmationLength)
    if((firstNameLength > 2) && (lastNameLength > 2) && (PasswordEntryLength > 6) && (extractPasswordConfirmation == extractPasswordEntry)){
        submitEnvoyer.disabled = false
    }else{
        submitEnvoyer.disabled = true
    }

}


//fonction contenant des fonctions qui vont s'activer lorsque un événement arrive à un élément de l'html qui a un id
function init() {
    textFirstName.addEventListener("keyup", fnControlCharactersFirstName)
    textLastName.addEventListener("keyup", fnControlCharactersLastname)
    passwordEntry.addEventListener("keyup", fnControlCharactersPassword)
    passwordConfirmation.addEventListener("keyup", fnControlValidPasswordConfirmation)
    submitEnvoyer.addEventListener("keyup", fnSendInformations)
    textFirstName.addEventListener("keyup", fnSendInformations1)
    textLastName.addEventListener("keyup", fnSendInformations2)
    passwordEntry.addEventListener("keyup", fnSendInformations3)
    passwordConfirmation.addEventListener("keyup", fnSendInformations4)
}

