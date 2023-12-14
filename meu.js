window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})


let trilho = document.getElementById('trilho')

let body = document.querySelector('body')

    trilho.addEventListener('click', ()=>{
        trilho.classList.toggle('dark')
        body.classList.toggle('dark')
})
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

