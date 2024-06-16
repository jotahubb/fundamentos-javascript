//criar um elemento 

let el = document.createElement('h3')

el.classList = 'testando-classe'

let texto = document.createTextNode('Este é o texto do H3')

el.appendChild(texto)

//selecionar o elemento que quero trocar
let title = document.querySelector('#title')

//selecionando o pai do elemento
let pai = title.parentNode 

//fazendo alteração dos elementos 
pai.replaceChild(el,  title)