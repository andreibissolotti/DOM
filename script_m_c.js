// Manipulando conteúdo

// textContent (retorna conteudos ocultos pelo css)
const element = document.querySelector('h1')

element.textContent = "Olá Devs!"

console.log(element.textContent)

// innerText (não retorna conteudos ocultos pelo css)

element.innerText= "Olá Devs!"

// innerHTML

element.innerHTML= "Olá Devs! <small>!!!</small>"