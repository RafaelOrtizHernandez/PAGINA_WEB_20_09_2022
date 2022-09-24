const menu = document.querySelector('.bars');
let menuState = false;
menu.addEventListener('click', showMenu);

function showMenu()
{
    if (!menuState)
    {
        menu.classList.add("is-active");
        document.querySelector(".nav__links").classList.add("open");
        menuState = true;
    }
    else{
        menu.classList.remove("is-active");
        document.querySelector(".nav__links").classList.remove("open");
        menuState = false;
    }
}

document.querySelector(".titulo").insertAdjacentText("beforeend", "Coderider");
document.querySelector(".home").insertAdjacentText("beforeend", "Inicio");
document.querySelector(".file-alt").insertAdjacentText("beforeend", "Proyectos");
document.querySelector(".folder-open").insertAdjacentText("beforeend", "Grupos");
document.querySelector(".comment-dots").insertAdjacentText("beforeend", "Dialogos");
document.querySelector(".map-marked-alt").insertAdjacentText("beforeend", "Contacto");

console.log(document.querySelectorAll(".logo"));

    


