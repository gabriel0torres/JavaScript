export const catalogo = [
    {
      id: "1",
      marca: "Zara",
      nome: "Camisa Larga com Bolsos",
      preco: 70,
      imagem: "product-1.jpg",
      feminino: false,
    },
    {
      id: "2",
      marca: "Zara",
      nome: "Casaco Reto com Lã",
      preco: 85,
      imagem: "product-2.jpg",
      feminino: true,
    },
    {
      id: "3",
      marca: "Zara",
      nome: "Jaqueta com Efeito Camurça",
      preco: 60,
      imagem: "product-3.jpg",
      feminino: false,
    },
    {
      id: "4",
      marca: "Zara",
      nome: "Sobretudo em Mescla de Lã",
      preco: 160,
      imagem: "product-4.jpg",
      feminino: false,
    },
    {
      id: "5",
      marca: "Zara",
      nome: "Camisa Larga Acolchoada de Veludo Cotelê",
      preco: 110,
      imagem: "product-5.jpg",
      feminino: false,
    },
    {
      id: "6",
      marca: "Zara",
      nome: "Casaco de Lã com Botões",
      preco: 170,
      imagem: "product-6.jpg",
      feminino: true,
    },
    {
      id: "7",
      marca: "Zara",
      nome: "Casaco com Botões",
      preco: 75,
      imagem: "product-7.jpg",
      feminino: true,
    },
    {
      id: "8",
      marca: "Zara",
      nome: "Colete Comprido com Cinto",
      preco: 88,
      imagem: "product-8.jpg",
      feminino: true,
    },
  ];

export function salvar_local_storage(chave, informacao){

  localStorage.setItem(chave, JSON.stringify(informacao))

}

export function ler_local_storage(chave){

  return JSON.parse(localStorage.getItem(chave))

}

export function apagar_do_local_storage(chave){

  localStorage.removeItem(chave)

}

export function desenhar_produto_no_carrinho_simples(id_produto, id_container_html, quantidade_produto){

  const produto = catalogo.find((p) => p.id === id_produto);

  const container_produtos_carrinho = document.getElementById(id_container_html)
  const element_article = document.createElement('article')
  const article_classes = ['flex', 'bg-stone-200', 'rounded-lg', 'p-1' ,'relative', 'mb-2', 'w-92']
  
  for(const article_class of article_classes){

      element_article.classList.add(article_class)

  }

  const cartao_produto_carrinho = `<img src="./assets/img/${produto.imagem}" alt="produto-${produto.id}" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">              
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>             
  </div>
  <div class="flex text-slate-950 items-end absolute bottom-0 right-2">
      <p id="quantidade-${produto.id}" class="ml-2">${quantidade_produto}</p>   
  </div>`

  element_article.innerHTML = cartao_produto_carrinho
  container_produtos_carrinho.appendChild(element_article)

}