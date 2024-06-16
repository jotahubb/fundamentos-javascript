//click

let btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    console.log('clicou')
})

//click manipulando outros elementos 

let title = document.querySelector('#title')

title.addEventListener('click', function() {
    let subtitle = document.querySelector('.subtitle')
    subtitle.style.display = 'none'
})

// click duplo

let subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('dblclick', function() {
    console.log('clicou duas vezes')
})
