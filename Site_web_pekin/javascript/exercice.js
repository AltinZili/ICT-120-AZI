// cette fonction ajoute le style "makeblue" à la div1
function makeblue() {
    div1.classList.add("makeblue")
}
// cette fonction enlève le style "makeblue" à la div1
function demakeblue() {
    div1.classList.remove("makeblue")
}
// cette fonction ajoute le style "arial" à la div3
function arial() {
    div3.classList.add("arial")
}
// cette fonction ajoute le style "arial" à la div3
function notarial() {
    div3.classList.remove("arial")
}

// cette fonction écrit YES sous le style "makegreenbigyes" si les checkbox chk1 et 2 sont cochées
function makegreenbigyes() {
    if ((chk1.checked == true) && (chk2.checked == true)) {
        div4.innerHTML = "YES"
        div4.classList.add("makegreenbigyes")
    }
}

//cette fonction supprime la div dans la div5
function destroydiv(){
    insidediv5.remove()
}

// cette fonction permet d'extraire du champ texte "Nom", la première lettre, la lettre après le dernier espace
// et la dernière lettre de ce qui est tappé pour l'afficher dans le champ text "Initiales"
function nametoinitials(){
    first = txtName.value.substr(0,1)
    espace = txtName.value.lastIndexOf(" ")
    second = txtName.value.substr(espace + 1, 1)
    last = txtName.value.length
    third = txtName.value.substr(last - 1, 1)
    txtInitials.value = first + second + third
}

// cette fonction permet de désactiver les boutons "AvosM" et "pret", afficher le bouton "partez" en le désactivant,
// et remplace l'image "idempty" par l'image "idmarks"
function fnAvosM(){
    AvosM.disabled = true
    pret.disabled = false
    partez.hidden = false
    partez.disabled = true
    idempty.hidden = true
    idmarks.hidden = false
}

// cette fonction permet de cacher le boutton "AvosM" de désactiver les boutons "pret" et "partez" en plus de remplacer
// l'image "idmarks" par "idset"
function fnpret(){
    AvosM.hidden = true
    pret.disabled = true
    partez.disabled = false
    idmarks.hidden = true
    idset.hidden = false
}

//Cette fonction permet pour commencer de désactiver le boutton prêt et partez tout en remplacant l'image "idset" par
// "idgo", ensuite après 3 seconde la fonction fninitialise sera appelée
function fnpartez(){

    //cette fonction remet l'image et les bouttons dans l'état qu'ils étaient avant qu'une fonction ait été appelée
    function fninitialise(){
        idempty.hidden = false
        AvosM.hidden = false
        AvosM.disabled = false
        idgo.hidden = true
        partez.hidden = true
        pret.hidden = false
        pret.disabled = true
    }

    pret.hidden = true
    partez.disabled = true
    idset.hidden = true
    idgo.hidden = false
    setTimeout(fninitialise,3000)
}





function init() {
    div1.addEventListener("click", makeblue)  // lors d'un clique sur la div1, appelle la fonction "makeblue"
    div2.addEventListener("click", demakeblue) // lors d'un clique sur la div2, appelle la fonction "demakeblue"
    div3.addEventListener("mouseover", arial) // lorsque la div3 est survolé par la souris, appelle la fonction "arial"
    div3.addEventListener("mouseout", notarial) // lorsque la div3 n'est pas survolée par la souris, appelle la fonction "notarial"
    div4.addEventListener("click", makegreenbigyes) // lors d'un clique sur la div4, appelle la fonction "makegreenbigyes"
    div5.addEventListener("click", destroydiv) // lors d'un clicque sur la div5, appelle la fonction destroydiv
    txtName.addEventListener("keyup", nametoinitials) // lorsqu'une touche est appuyée puis relâchée, appelle la fonction nametoinitials
    AvosM.addEventListener("click", fnAvosM) // lors d'un clique sur le boutton "AvosM", appelle la fonction "fnAvosM"
    pret.addEventListener("click", fnpret) // lors d'un clique sur le boutton "pret", appelle la fonction "fnpret"
    partez.addEventListener("click", fnpartez) // lors d'un clique sur le boutton "partez", appelle la fonction "fnpartez"

}

//lit tout l'html avant de lancer la fonction init
document, addEventListener("DOMContentLoaded", init)