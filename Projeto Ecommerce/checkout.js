import {desenhar_produto_no_carrinho_simples, ler_local_storage, apagar_do_local_storage, salvar_local_storage} from "./src/utilidades"

function desenhar_produtos_checkout(){

    const id_produto_carrinho_com_quantidade = ler_local_storage('carrinho') ?? {}

    for(const id_produto in id_produto_carrinho_com_quantidade){

        desenhar_produto_no_carrinho_simples(id_produto, "container-produtos-checkout", id_produto_carrinho_com_quantidade[id_produto])

    }

}

function finalizar_compra(evt){

    evt.preventDefault();
    const id_produto_carrinho_com_quantidade = ler_local_storage('carrinho') ?? {}
    if(Object.keys(id_produto_carrinho_com_quantidade).length === 0){
        return
    }
    const data_atual = new Date()
    const pedido_feito = {

        data_pedido: data_atual,
        pedido: id_produto_carrinho_com_quantidade

    }

    const historico_de_pedidos = ler_local_storage('historico') ?? []
    const historico_de_pedidos_atualizado = [pedido_feito, ...historico_de_pedidos]

    salvar_local_storage('historico', historico_de_pedidos_atualizado)
    apagar_do_local_storage('carrinho')
    window.location.href = window.location.origin + "/pedidos.html"

}

desenhar_produtos_checkout();

document.addEventListener('submit', (evt) => finalizar_compra(evt))