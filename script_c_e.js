// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = "Ola Devs!"

// append (adiciona no fim) prepend (adiciona no começo)
const body = document.querySelector('body')
body.append(div)
body.prepend(div)

// insertBefor (adiciona antes de algo)
const script = body.querySelector('script')

body.insertBefore(div, script)
// Para "insertAfter"
body.insertBefore(div,script.nextSibling)