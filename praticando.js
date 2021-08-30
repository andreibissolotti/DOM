const button = document.querySelector('#openModal')
const div = document.querySelector('#janela')


function visible(){
    div.classList.remove('invisible')
}

function invisible(event){
    switch (event.key){
        case "Escape":
            div.classList.add('invisible')
            break
        default:
            break
    } 
}

button.addEventListener('click',visible)
document.addEventListener('keyup', invisible) // 'keypress' não recoheceu a tecla ESC no Brave.