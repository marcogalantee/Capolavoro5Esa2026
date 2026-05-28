/* SCRITTA */

let testo = "Studente Liceo Michelangelo Cagliari 5Esa";
let posizione = 0;

function scrivi(){

    if(posizione < testo.length){

        document.querySelector(".scritta") && (document.querySelector(".scritta").innerHTML += testo.charAt(posizione));

        posizione++;

        setTimeout(scrivi,100);
    }
}

scrivi();

/* ANIMAZIONI */

let elementi = document.querySelectorAll(".animazione");

function mostra(){

    elementi.forEach(function(elemento){

        let distanza = elemento.getBoundingClientRect().top;

        if(distanza < window.innerHeight){

            elemento.classList.add("attiva");
        }

    });

}

window.addEventListener("scroll",mostra);

mostra();