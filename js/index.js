/* intenté crear una variable "let albums = document.getElementsByClassName('portada')" para acceder a todos los albums juntos, pero no me detectó ninguno, 
así que cree una variable para cada album
Está RE mal hecho pero lo intenté */

//accedo al ID "portada" de c/u de los álbums
let album1 = document.getElementById('portada1')
let album2 = document.getElementById('portada2')
let album3 = document.getElementById('portada3')

//accedo al ID "audio" de c/u de los álbums
const audio1 = document.getElementById('musica1')
const audio2 = document.getElementById('musica2')
const audio3 = document.getElementById('musica3')

//creo un evento; al clickear sobre las portadas, suena una canción del álbum correspondiente
album1.addEventListener("click", reproducirMusica1)
function reproducirMusica1(){
    audio1.play();
}
album2.addEventListener("click", reproducirMusica2)
function reproducirMusica2(){
    audio2.play();
}
album3.addEventListener("click", reproducirMusica3)
function reproducirMusica3(){
    audio3.play();
}

