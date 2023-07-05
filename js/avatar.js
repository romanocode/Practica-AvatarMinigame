const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonElementoJugador = document.getElementById('boton-personaje')
sectionReiniciar.style.display ='none'
const botonReiniciar = document.getElementById('boton-reiniciar')




const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')

const spanPersonajeJugador = document.getElementById('personaje-jugador')

const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataqueDelJugador = document.getElementById('ataque-del-jugador')
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const contenedorTarjetas=document.getElementById('contenedorTarjetas')
const contenedorAtaques =document.getElementById('contenedorAtaques')


let avatars = []
let ataqueJugador =[]
let ataqueEnemigo =[]
let opcionDePersonaje
let inputAgua 
let inputTierra 
let inputFuego 
let inputAire 
let personajeJugador
let ataquesAvatar
let ataquesAvatarEnemigo
let botonAgua 
let botonTierra 
let botonFuego 
let botonAire  
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

console.log(avatars)

class Avatar{
   constructor(nombre, foto, vida){
      this.nombre = nombre 
      this.foto = foto
      this.vida = vida 
      this.ataques = []
   }
   
}

let katara = new Avatar('Katara','./css/imagenes/katara.png',5 )

let toph = new Avatar('Toph', './css/imagenes/toph.png', 5)

let Azula = new Avatar('Azula', './css/imagenes/azula.png', 5)

let Aang = new Avatar('Aang', './css/imagenes/aang.png', 5)

katara.ataques.push(
   {nombre: '💧', id: 'boton-agua'},
   {nombre: '💧', id: 'boton-agua'},
   {nombre: '💧', id: 'boton-agua'},
   {nombre: '💧', id: 'boton-agua'},
   {nombre: '💧', id: 'boton-agua'},
)

toph.ataques.push(
   {nombre: '🗻🌱', id: 'boton-tierra'},
   {nombre: '🗻🌱', id: 'boton-tierra'},
   {nombre: '🗻🌱', id: 'boton-tierra'},
   {nombre: '🗻🌱', id: 'boton-tierra'},
   {nombre: '🗻🌱', id: 'boton-tierra'},
)

Azula.ataques.push(
   {nombre: '🔥', id: 'boton-fuego'},
   {nombre: '🔥', id: 'boton-fuego'},
   {nombre: '🔥', id: 'boton-fuego'},
   {nombre: '🔥', id: 'boton-fuego'},
   {nombre: '🔥', id: 'boton-fuego'},
)

Aang.ataques.push(
   {nombre: '🌀', id: 'boton-aire'},
   {nombre: '🌀', id: 'boton-aire'},
   {nombre: '💧', id: 'boton-agua'},
   {nombre: '🔥', id: 'boton-fuego'},
   {nombre: '🌱🗻', id: 'boton-tierra'},
)

avatars.push(katara,toph,Azula,Aang)

function iniciarJuego(){

   sectionSeleccionarAtaque.style.display = 'none'
   

   avatars.forEach((avatar) =>{
      opcionDePersonaje = `
      <input type="radio" name="personaje" id=${avatar.nombre}>
      <label class="tarjeta-de-personaje" for=${avatar.nombre}>
         <p>${avatar.nombre} </p> 
         <img src=${avatar.foto} alt=${avatar.nombre}>
      </label>
      `

      contenedorTarjetas.innerHTML += opcionDePersonaje

       inputAgua = document.getElementById('Katara')
       inputTierra = document.getElementById('Toph')
       inputFuego = document.getElementById('Azula')
       inputAire = document.getElementById('Aang')
   })
   botonElementoJugador.addEventListener('click', seleccionarPersonajeJugador) 

   botonReiniciar.addEventListener('click', reiniciarJuego)
   
}


function seleccionarPersonajeJugador(){
   
   sectionSeleccionarPersonaje.style.display = 'none'

   
   sectionSeleccionarAtaque.style.display = 'flex'


   

   if (inputAgua.checked){
      spanPersonajeJugador.innerHTML = inputAgua.id
      personajeJugador = inputAgua.id
   }
   else if (inputTierra.checked){
      spanPersonajeJugador.innerHTML = inputTierra.id
      personajeJugador = inputTierra.id
   }
   else if (inputFuego.checked){
      spanPersonajeJugador.innerHTML = inputFuego.id
      personajeJugador = inputFuego.id
   }
   else if (inputAire.checked){
      spanPersonajeJugador.innerHTML = inputAire.id
      personajeJugador = inputAire.id
   }
   else{
      alert('Seleccione su personaje')
   }
   
   extraerAtaques(personajeJugador)
   seleccionarPersonajeEnemigo()
   
}


function extraerAtaques(personajeJugador){
   let ataques
   avatars.forEach((avatar) => {
      if (personajeJugador === avatar.nombre) {
         ataques = avatar.ataques
      }
   })
   mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
   ataques.forEach((ataque) => {
      ataquesAvatar = `
      <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
      `

      contenedorAtaques.innerHTML += ataquesAvatar
   })

    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botonFuego = document.getElementById('boton-fuego')
    botonAire = document.getElementById('boton-aire')
    botones = document.querySelectorAll('.BAtaque')
    
   
   }

   function secuenciaAtaque(){
      botones.forEach((boton) => {
         boton.addEventListener('click',(e) =>{
            if (e.target.textContent === '🔥'){
               ataqueJugador.push('FUEGO')
               console.log(ataqueJugador)
               boton.style.background = '#112f58'
               boton.disable = true
            }else if(e.target.textContent == '💧'){
               ataqueJugador.push('AGUA')
               console.log(ataqueJugador)
               boton.style.background = '#112f58'
               boton.disable = true
            }else if(e.target.textContent === '🌀'){
               ataqueJugador.push('AIRE')
               console.log(ataqueJugador)
               boton.style.background = '#112f58'
               boton.disable = true
            }else{
               ataqueJugador.push('TIERRA')
               console.log(ataqueJugador)
               boton.style.background = '#112f58'
               boton.disable = true
            }
            ataqueAleatorioEnemigo()
         })
      })
      
   }


function seleccionarPersonajeEnemigo() {
   let personajeAleatorio = aleatorio(0, avatars.length -1)

   spanPersonajeEnemigo.innerHTML = avatars[personajeAleatorio].nombre
   ataquesAvatarEnemigo = avatars[personajeAleatorio].ataques

   secuenciaAtaque()
}



function ataqueAleatorioEnemigo(){
   let ataqueAleatorio = aleatorio(0, ataquesAvatarEnemigo.length -1)
   
   if(ataqueAleatorio == 0 || ataqueAleatorio ==1){
      ataqueEnemigo.push('AGUA')
   }
   else if (ataqueAleatorio == 3 ){
      ataqueEnemigo.push('TIERRA')
   }
   else if (ataqueAleatorio == 4){
      ataqueEnemigo.push('FUEGO')
   }
   else{
      ataqueEnemigo.push('AIRE')
   }
      console.log(ataqueEnemigo)
      iniciarPelea()
}

function iniciarPelea(){
   if (ataqueJugador.length === 5){
      combate()
   }
}


function indexAmbosOponentes(jugador, enemigo){
   indexAtaqueJugador = ataqueJugador[jugador]
   indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

   for (let index = 0; index < ataqueJugador.length; index++) {
     if(ataqueJugador[index]=== ataqueEnemigo[index]){
         indexAmbosOponentes(index,index)
         crearMensaje("EMPATE")
        
     }else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
      indexAmbosOponentes(index,index)
      crearMensaje("GANASTES")
      victoriasJugador++
         spanVidasJugador.innerHTML = victoriasJugador
     
  }
  else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
     indexAmbosOponentes(index,index)
      crearMensaje("GANASTES")
      victoriasJugador++
         spanVidasJugador.innerHTML = victoriasJugador
      
  }
  else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'AIRE'){
      indexAmbosOponentes(index,index)
      crearMensaje("GANASTES")
      victoriasJugador++
         spanVidasJugador.innerHTML = victoriasJugador
      
  }
   else if(ataqueJugador[index] === 'AIRE' && ataqueEnemigo[index] === 'TIERRA'){
   indexAmbosOponentes(index,index)   
   crearMensaje("GANASTES")
   victoriasJugador++
         spanVidasJugador.innerHTML = victoriasJugador
   
}
  else{
      crearMensaje("PERDISTES")
      indexAmbosOponentes(index,index)
      victoriasEnemigo++
         spanVidasEnemigo.innerHTML = victoriasEnemigo
      
  }
      
   }

   revisarVidas()
   
}

function revisarVidas(){
   if(victoriasJugador === victoriasEnemigo){
      crearMensajeFinal('Esto es un empate!!!')
   }else if (victoriasJugador > victoriasEnemigo){
      crearMensajeFinal('FELICITACIONES! Ganastes')

   }else{
      crearMensajeFinal('Lo siento, perdistes :(')
   }
}

function crearMensaje(resultado){

   let nuevoAtaqueDelJugador = document.createElement('p')
   let nuevoAtaqueDelEnemigo = document.createElement('p')

   sectionMensajes.innerHTML= resultado
   nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador
   nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo


   ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
   ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal){

   sectionMensajes.innerHTML= resultadoFinal

   sectionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
   location.reload()
}

//Declaracion de funcion
function aleatorio(min,max){
   return Math.floor(Math.random() * (max - min + 1) + min)
}





window.addEventListener('load', iniciarJuego)