const paineis = document.querySelectorAll('.painel')

paineis.forEach((painel) => {
    painel.addEventListener('click', () => {
        removerClasseAtiva ()
        painel.classList.add('ativo');
    })
})

function removerClasseAtiva() {
    paineis.forEach(painel => {
        painel.classList.remove('ativo')
    })

}