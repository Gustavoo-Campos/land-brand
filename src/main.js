


const engre = document.querySelector("#engre")
const engre_in = document.querySelector("#engre_in")
const div = document.querySelector("#config")



function execIn(){


    div.classList.remove("config-out");
    div.classList.add("config-in");

}

engre.addEventListener("click", execIn);




function execOut(){

    div.classList.remove("config-in");
    div.classList.add("config-out");

}

engre_in.addEventListener("click", execOut);
















