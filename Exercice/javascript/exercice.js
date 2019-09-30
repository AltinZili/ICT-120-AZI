function makeblue(){
    div1.classList.add("makeblue")
}


function init(){
    div1.addEventListener("click", makeblue)
}

document,addEventListener("DOMContentLoaded", init)