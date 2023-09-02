import { renderizar_catalogo } from "./src/cartao_produto";
import { inicializar_carrinho, atualiza_preco_carrinho, renderizar_carrinho } from "./src/menu_carrinho";
import { inicializar_filtros } from "./src/filtros_catalogo";

renderizar_catalogo();
inicializar_carrinho();
renderizar_carrinho();
atualiza_preco_carrinho();
inicializar_filtros();


