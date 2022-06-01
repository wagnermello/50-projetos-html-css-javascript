const progresso = document.getElementById('progresso')
const anterior = document.getElementById('anterior')
const proximo = document.getElementById('proximo')
const circulos = document.querySelectorAll('.circulo')

let progressoAtivo = 1

proximo.addEventListener('click', () => {
    progressoAtivo++

    if (progressoAtivo > circulos.length) {
        progressoAtivo = circulos.length
    }

    update()
})

anterior.addEventListener('click', () => {
    progressoAtivo--

    if (progressoAtivo < 1) {
        progressoAtivo = 1
    }

    update()
})

function update() {
    circulos.forEach((circulo, idx) => {
        if (idx < progressoAtivo) {
            circulo.classList.add('active')
        } else {
            circulo.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progresso.style.width = (actives.length - 1) / (circulos.length - 1) * 100 + '%'

    if (progressoAtivo === 1) {
        anterior.disabled = true
    } else if (progressoAtivo === circulos.length) {
        proximo.disabled = true
    } else {
        anterior.disabled = false
        proximo.disabled = false
    }
}