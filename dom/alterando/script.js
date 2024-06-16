// selecionar o elemento

let title = document.querySelector('#title')

// innerHTML 

title.innerHTML = 'Testando o texto alterado!'

// textcontent - mais utilizado, mais recomendado, mais perfomático

let subTitle = document.querySelector('.subtitle')
console.log(subTitle)

subTitle.textContent = 'Testando o Text Content'