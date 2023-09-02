import { adicionar_ao_carrinho } from "./menu_carrinho";
import { catalogo } from "./utilidades";

export function renderizar_catalogo(){
    for(const produto_catalogo of catalogo){

        const cartao_produto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produto_catalogo.feminino ? 'feminino' : 'masculino'}" id="card-produto-${produto_catalogo.id}">
    <img src="assets/img/${produto_catalogo.imagem}" alt="produto 1" class="group-hover:scale-110 duration-300 my-3 rounded-lg">
    <p class='text-sm'>${produto_catalogo.nome}</p>
    <p class='text-sm'>${produto_catalogo.marca}</p>
    <p class='text-sm'>$${produto_catalogo.preco}</p>
    <button id='adicionar-${produto_catalogo.id}' class="bg-slate-950 text-slate-200 hover:bg-slate-700 "><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;

    document.getElementById("container-produto").innerHTML += cartao_produto
    document.getElementById(`adicionar-${produto_catalogo.id}`)

    }

    for(const produto_catalogo of catalogo){

        document.getElementById(`adicionar-${produto_catalogo.id}`).addEventListener('click', () => adicionar_ao_carrinho(produto_catalogo.id))
    }
}