let title = document.querySelector('#title')

/*title.addEventListener('mouseover', function() {
    let subtitle = document.querySelector('.subtitle')
    subtitle.style.display = 'none'
})

title.addEventListener('mouseout', function() {
    let subtitle = document.querySelector('.subtitle')
    subtitle.style.display = 'inline'
})*/

let subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('mouseover', function() {
    let legenda = document.querySelector('.hide')
    legenda.classList.remove('hide')
})

subtitle.addEventListener('mouseout', function() {
    let legenda = document.querySelector('.hide')
    legenda.classList.add('hide')
})