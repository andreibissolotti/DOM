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

