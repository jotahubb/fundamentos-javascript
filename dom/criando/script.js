let novoParagrafo = document.createElement('p') 
//criando elemento

let texto = document.createTextNode('este é o novo paragrafo')
//criando conteúdo do elemento

novoParagrafo.appendChild(texto)
//add conteúdo criado ao elemento

let bory = document.querySelector('body')
//selecionando corpo da pagina 

bory.appendChild(novoParagrafo)
//add o elemento ao corpo da pagina

//-----------------------------------------------------------------
let container = document.getElementById('container')
let p = document.createElement('p')
p.appendChild (document.createTextNode('este é o container'))


container.appendChild(p)