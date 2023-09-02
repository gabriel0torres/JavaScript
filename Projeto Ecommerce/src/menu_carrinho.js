import { catalogo, salvar_local_storage, ler_local_storage } from "./utilidades"

const id_produto_carrinho_com_quantidade = ler_local_storage('carrinho') ?? {};

function abrir_carrinho(){

    document.getElementById('carrinho').classList.add('right-[0px]')
    document.getElementById('carrinho').classList.remove('right-[-360px]')
}

function fechar_carrinho(){

    document.getElementById('carrinho').classList.remove('right-[0px]')
    document.getElementById('carrinho').classList.add('right-[-360px]')

}

function ir_para_checkout(){

    if(Object.keys(id_produto_carrinho_com_quantidade).length === 0){

        return

    }

    window.location.href = window.location.origin + "/checkout.html"

}

export function inicializar_carrinho(){

    const botao_fechar = document.getElementById('fechar-carrinho')
    const botao_abrir = document.getElementById('abrir-carrinho')
    const botao_ir_para_checkout = document.getElementById('finalizar-compra')

    botao_fechar.addEventListener('click', fechar_carrinho)
    botao_abrir.addEventListener('click', abrir_carrinho)
    botao_ir_para_checkout.addEventListener('click', ir_para_checkout)

}



function remover_do_carrinho(id_produto){

    delete id_produto_carrinho_com_quantidade[id_produto];
    salvar_local_storage('carrinho', id_produto_carrinho_com_quantidade)
    atualiza_preco_carrinho()
    renderizar_carrinho();

}

function incrementar_quantidade_produto(id_produto){

    id_produto_carrinho_com_quantidade[id_produto]++;
    salvar_local_storage('carrinho', id_produto_carrinho_com_quantidade)
    atualiza_preco_carrinho()
    atualizar_info_quantidade(id_produto)

}

function decrementar_quantidade_produto(id_produto){

    if(id_produto_carrinho_com_quantidade[id_produto] === 1){
        remover_do_carrinho(id_produto)
        return;
    }
    id_produto_carrinho_com_quantidade[id_produto]--;
    salvar_local_storage('carrinho', id_produto_carrinho_com_quantidade)
    atualiza_preco_carrinho()
    atualizar_info_quantidade(id_produto)

}

function atualizar_info_quantidade(id_produto){

    document.getElementById(`quantidade-${id_produto}`).innerText = id_produto_carrinho_com_quantidade[id_produto];

}

function desenhar_produto_no_carrinho(id_produto){

    const produto = catalogo.find((p) => p.id === id_produto);

    const container_produtos_carrinho = document.getElementById('produtos-carrinho')
    const element_article = document.createElement('article')
    const article_classes = ['flex', 'bg-slate-100', 'rounded-lg', 'p-1' ,'relative']
    
    for(const article_class of article_classes){

        element_article.classList.add(article_class)

    }

    const cartao_produto_carrinho = `<button id="remover-item-${produto.id}" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-red-500 hover:text-slate-800"></i></button>
    <img src="./assets/img/${produto.imagem}" alt="produto-${produto.id}" class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">              
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>             
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2">
        <button class="" id="decrementar-produto-${produto.id}">-</button>
        <p id="quantidade-${produto.id}" class="ml-2">${id_produto_carrinho_com_quantidade[produto.id]}</p>
        <button class="ml-2" id="incrementar-produto-${produto.id}">+</button>
    </div>`

    element_article.innerHTML = cartao_produto_carrinho
    container_produtos_carrinho.appendChild(element_article)

    document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click',() => decrementar_quantidade_produto(produto.id))
    document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click',() => incrementar_quantidade_produto(produto.id))
    document.getElementById(`remover-item-${produto.id}`).addEventListener('click',() => remover_do_carrinho(produto.id))

}

export function renderizar_carrinho(){

    const container_produtos_carrinho = document.getElementById('produtos-carrinho');
    container_produtos_carrinho.innerHTML = "";

    for(const id_produto in id_produto_carrinho_com_quantidade ){
        desenhar_produto_no_carrinho(id_produto)
    }
    
}

export function adicionar_ao_carrinho(id_produto){

    if(id_produto in id_produto_carrinho_com_quantidade){

        incrementar_quantidade_produto(id_produto);
        return;

    }

    id_produto_carrinho_com_quantidade[id_produto] = 1
    salvar_local_storage('carrinho', id_produto_carrinho_com_quantidade)
    desenhar_produto_no_carrinho(id_produto)
    atualiza_preco_carrinho()
    
}

export function atualiza_preco_carrinho(){

    const preco_carrinho = document.getElementById('preco-total');
    let preco_total_carrinho = 0

    for(const id_produto_no_carrinho in id_produto_carrinho_com_quantidade){

        preco_total_carrinho += catalogo.find((p) => p.id == id_produto_no_carrinho).preco * id_produto_carrinho_com_quantidade[id_produto_no_carrinho]

    }

    preco_carrinho.innerText = `Total: $${preco_total_carrinho}`

}