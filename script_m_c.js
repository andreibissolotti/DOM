// Manipulando conteúdo

// textContent (retorna conteudos ocultos pelo css)
const element = document.querySelector('h1')

element.textContent = "Olá Devs!"

console.log(element.textContent)

// innerText (não retorna conteudos ocultos pelo css)

element.innerText= "Olá Devs!"

// innerHTML

element.innerHTML= "Olá Devs! <small>!!!</small>"

// value (manipula um input)

const element1 = document.querySelector('input')

console.log(element1.value)
element1.value = ('Valor que eu quiser')

// Atributos

const header = document.querySelector('header')

header.setAttribute('id','header') // Adiciona, ou modifica um atributo

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id')) // Pega o atributo

header.removeAttribute('id') // Remove o atributo