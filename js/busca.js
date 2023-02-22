const lupa = document.getElementById('#botao-pesquisa')

lupa.addEventListener('click', () => {
    const areaPesquisa = document.querySelector('.pesquisa__mobile')

    areaPesquisa.classList.toggle('pesquisa__mobile--ativado')
})