// Alterando estilos

// style
const element = document.querySelector('body')

//element.style.backgroundColor = "#f9f3D2"

// classList

element.classList.add('active', 'green')

console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active') // (pesquisa pela clase, se existir, remove, se não, adiciona)
