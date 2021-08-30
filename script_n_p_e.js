// Nvegando Pelos elementos

// parentNode parentElement
const element = document.querySelector('h1')

console.log(element.parentNode)

// childNodes (considera os espaços vazios) children (ignora espaços vazios)
const el = document.querySelector('body')

console.log(el.children)
console.log(el.childNodes)

// firstChild (considera os espaços vazios) firstElementChild (ignora espaços vazios)

console.log(el.firstChild)
console.log(el.firstElementChild)

// lastChild lastElementChild

// Igual ao caso anterior, so que para o último

// nextSibling nextElementSibling

// previousSibling previousElementSibling

// Similar aos casos anteriores porem para irmãos