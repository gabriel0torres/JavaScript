function add_jogador(){

    //capturamos a section
    const add_jogador = document.getElementById("time_escalado")

    //criamos uma lista não ordenada
    const ul = document.createElement("ul")

    //criamos um item para a lista
    const nameLi = document.createElement('li')
    const nome_jogador = document.getElementById('nome_jogador').value
    nameLi.innerText = "Nome: " + nome_jogador
    ul.appendChild(nameLi)

    //criamos um item para a lista
    const numberLi = document.createElement('li')
    const numero_jogador = document.getElementById('numero_jogador').value
    numberLi.innerText = "Camisa: " + numero_jogador
    ul.appendChild(numberLi)

    //criamos um item para a lista
    const positionLi = document.createElement('li')
    const posicao_jogador = document.getElementById('posicao_jogador').value
    positionLi.innerText = "Posição: " + posicao_jogador
    ul.appendChild(positionLi)

    const confirmation = confirm("ESCALAR: " + nome_jogador + " COMO " + posicao_jogador + "?")

    if(confirmation){

    //fazemos aparecer o titulo e a lista na página
    add_jogador.append(ul);

    document.getElementById('nome_jogador').value = ''
    document.getElementById('numero_jogador').value = ''
    document.getElementById('posicao_jogador').value = ''
    
    }

}


function remove_jogador() {
    
    const time_escalado_section = document.getElementById('time_escalado')
    
    const info = document.getElementsByTagName('ul')

    time_escalado_section.removeChild(info[info.length - 1])


}