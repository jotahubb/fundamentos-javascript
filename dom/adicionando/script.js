// criar elemento 
let el = document.createElement('div')
el.classList = 'div-criada'

let container = document.querySelector('#container')

//inserir o elemento filho 
container.appendChild(el)

//inserBefore - insere antes 
el2  = document.createElement('div')
el2.classList = 'inserBefore'

el3 = document.querySelector('#container .div-criada')

container.insertBefore(el2, el3)