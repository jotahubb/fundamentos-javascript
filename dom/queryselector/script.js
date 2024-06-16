/* querySelectorAll - seleciona 
        todos os elementos
        e conseguimos também 
        pegar um item dentro
            do outro 
*/
let itensQuery = document.querySelectorAll('#lista .item')
console.log(itensQuery)

let itensQuery2 = document.querySelectorAll('#lista2 .item')
console.log(itensQuery2)

// querySelector seleciona sempre o primeiro elemento

let lista = document.querySelector('#lista')
console.log(lista)

let primeiraLista = document.querySelector('ul')
console.log(primeiraLista)
