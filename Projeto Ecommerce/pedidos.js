import { ler_local_storage, desenhar_produto_no_carrinho_simples } from "./src/utilidades";

function criar_pedido_historico(pedido_com_data){

    const elemento_pedido = `<p class='text-xl text-bold my-4'>${new Date(pedido_com_data.data_pedido).toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    })}</p>
    <section id='container-pedidos-${pedido_com_data.data_pedido}' class='bg-slate-300 p-3 rounded-md'</section>`

    const main = document.getElementsByTagName('main')[0]
    main.innerHTML += elemento_pedido

    for(const id_produto in pedido_com_data.pedido){

        desenhar_produto_no_carrinho_simples(id_produto, `container-pedidos-${pedido_com_data.data_pedido}`, pedido_com_data.pedido[id_produto] )

    }

}

function renderizar_historico_pedidos(){

    const historico = ler_local_storage('historico')
    for(const pedido_com_data of historico){

        criar_pedido_historico(pedido_com_data)

    }

}

renderizar_historico_pedidos()