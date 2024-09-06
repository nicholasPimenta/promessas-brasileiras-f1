document.addEventListener('DOMContentLoaded', () => {
  pesquisar('')
})

function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let termo = document.getElementById("termo-pesquisa").value.toLowerCase();

  let resultados = ""

  const resultadosFiltrados = promessasBrasileiras.filter(dado => {
    return dado.titulo.toLowerCase().includes(termo) ||
           dado.descricao.toLowerCase().includes(termo)
  })

  resultadosFiltrados.forEach(dado => {
    resultados += `
    <div class="item-resultado">
      <h2>${dado.titulo}</h2>
      <p class="descricao-meta">
        ${dado.descricao}
      </p>
      <div class="links-piloto">
      <a href=${dado.info} target="_blank">
        Mais Informações
      </a>
      <a href=${dado.instagram} target="_blank">
        Instagram do piloto
      </a>
      </div>
    </div>
  `
  });
  section.innerHTML = resultados
}