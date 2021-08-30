// Eventos

function print() {
    console.log("print")
}

const input = document.querySelector('input')
input.onkeypress = function(){
    console.log('rodei')
} // Adicionando evento via Js (método 1 executa apenas a ultima fncionalidade)

const h1 = document.querySelector('h1')
h1.addEventListener('mouseover',print) // Adicionando evento via Js (método 2 empilha as funções adicionadas)

// Argumento event

input.onkeypress = function(event){
    console.log(event.currentTarget.value)
}