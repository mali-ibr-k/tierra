/*
index.js
  Estructura:
    - Paralax para el Banner
    - Carrousel para galería imágenes
    - Animación de objetos con scroll
    - Menu hamburguesa para el menu en responsive
*/

'use strict'

// ---- PARALAX ----

// Selección del contenedor del banner con imagen de fondo
const banner = document.querySelector('.Banner')
// Selección del texto (en este caso el logo) del banner
const bannerTexto = document.querySelector('.Banner-h2')

// Función para cuando haga scroll el texto del banner se desvanezca perdiendo opacidad
function Parallax(){
    let scrollPos = document.documentElement.scrollTop

    banner.style.backgroundPosition = "50% " + (-scrollPos / 8) + 
    "px"
    bannerTexto.style.opacity = 3 - (scrollPos / 100)
}

// Cuando haga scroll hacia arriba o abajo, se ejecuta de nuevo la función
Parallax()

document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll', function(){
        Parallax()
    })
})



// ---- CARROUSEL ----

// Variable que guarda la posición en la que está el carrousel (primera imagen)
let posicion = 0

// selección del contenedor del Carrousel
const carrouselContainer = document.querySelector('.Projects-carrousel')
// selección del botón de navegación 'siguiente' 
const siguiente = document.querySelector('.Siguiente')
// selección del botón de navegación 'anterior' 
const anterior = document.querySelector('.Anterior')

// función para mover el carrousel
const desplazarContainer = function(){
    carrouselContainer.style.transform = `translateX(-${posicion * (100 / 3)}%)`
}

console.log(siguiente)

// Cuando hago click en "siguiente"
//    Sumo 1 a posicion (pasa de foto)
    //    cuando llego a 3, vuelve a 0

siguiente.addEventListener('click',function(){
    posicion++
    if(posicion >= 3){
        posicion = 0
    }
    console.log(posicion)

    desplazarContainer()
})

// Cuando hago click en "anterior"
//    Resto 1 a posicion (va hacia atrás)
    //    cuando paso del principio, vuelvo al final
anterior.addEventListener('click', function(){
    posicion--
    if(posicion < 0){
        posicion = 2
    }

    console.log(posicion)
    desplazarContainer()
})




// ---- Animación de objetos con scroll ----
// cuando hago scroll se ocultan o se muestran los objetos

// Creo un 'IntersectionObserver'
const observer = new IntersectionObserver((entries) => {
    // cuando hago scroll y el objeto entra o sale en el viewport 
        // añado 'show' 
        // quito 'show
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
// selección de elementos ocultos
  const elementsToShow = document.querySelectorAll('.hidden');
//   Cuando cada elemento entra en el viewport aparecen con el efecto
  elementsToShow.forEach(el => observer.observe(el));




// ---- MENU hamburguesa ----

// selección de botón par abrir menu
const openBtn = document.getElementById('Open');
// selección de botón par cerrar menu
const closeBtn = document.getElementById('Close');
// selección del menu que se muestra o se oculta
const nav = document.getElementById('Nav');

//  Cuando hago click en botón de abrir (openBtn)
//    añado (add) clase .isActive
        // openBtn desaparece (none)
        // closeBtn aparece (block)
openBtn.addEventListener('click', () => {
    nav.classList.add('isActive');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

//  Cuando hago click en botón de cerrar (closeBtn)
//      quito (remove) clase .isActive
        // openBtn aparece (block)
        // closeBtn desaparece (none)
closeBtn.addEventListener('click', () => {
    nav.classList.remove('isActive');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});
