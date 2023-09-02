const catalogo_produtos = document.getElementById("container-produto")

function exibir_todos(){

    const produtos_escondidos = Array.from(catalogo_produtos.getElementsByClassName('hidden'))

    for(const produto of produtos_escondidos){
        produto.classList.remove('hidden')
    }

}

function esconder_masculinos(){

    exibir_todos()
    const produtos_masculinos = Array.from(catalogo_produtos.getElementsByClassName('masculino'))

    for(const produto of produtos_masculinos){

        produto.classList.add('hidden')

    }
}

function esconder_femininos(){

    exibir_todos()
    const produtos_femininos = Array.from(catalogo_produtos.getElementsByClassName('feminino'))

    for(const produto of produtos_femininos){

        produto.classList.add('hidden')

    }
}

export function inicializar_filtros(){

    document.getElementById('exibir-todos').addEventListener('click', exibir_todos)
    document.getElementById('exibir-femininos').addEventListener('click', esconder_masculinos)
    document.getElementById('exibir-masculinos').addEventListener('click', esconder_femininos)

}