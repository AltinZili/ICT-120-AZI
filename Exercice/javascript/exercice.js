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

function nametoinitials(){
    console.log(txtName.value)
}





function init() {
    div1.addEventListener("click", makeblue)  // lors d'un clique sur la div1, appelle la fonction "makeblue"
    div2.addEventListener("click", demakeblue) // lors d'un clique sur la div2, appelle la fonction "demakeblue"
    div3.addEventListener("mouseover", arial) // lorsque la div3 est survolé par la souris, appelle la fonction "arial"
    div3.addEventListener("mouseout", notarial) // lorsque la div3 n'est pas survolée par la souris, appelle la fonction "notarial"
    div4.addEventListener("click", makegreenbigyes) // lors d'un clique sur la div4, appelle la fonction "makegreenbigyes"
    div5.addEventListener("click", destroydiv) // lors d'un click sur la div5, appelle la fonction destroydiv
    txtName.addEventListener("keyup", nametoinitials)

}

//lit tout l'html avant de lancer la fonction init
document, addEventListener("DOMContentLoaded", init)