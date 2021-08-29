// getElementById('Id do elemento')

const element1 = document.getElementById('blog-title')
console.log(element1)


// getElementsByClassName('nome da classe')

const element2 = document.getElementsByClassName('one')
console.log(element2)

// getElementsByTagName('nome da tag')

const element3 = document.getElementsByTagName('meta')
console.log(element3)

// querrySelector('Selector CSS')
// Pega o primeiro que encontrar

const element4 = document.querySelector('[src]')
console.log(element4)

// querrySelectorAll()
// Seleciona tudo que corresponde

const element5 = document.querySelectorAll('.one')
console.log(element5)