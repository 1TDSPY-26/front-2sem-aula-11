import { useParams } from "react-router";

const listaProdutos = [
  {
    id: 1,
    nome: "Pintinho de Borracha",
    preco: 19.99,
  },
  {
    id: 2,
    nome: "Porquinho de Plástico",
    preco: 25.99,
  },
  {
    id: 3,
    nome: "Lobinho de Pelúcia",
    preco: 29.99
  }
];

export default function EditarProdutos() {
  const { id } = useParams<string>();

  const produto = listaProdutos.find((p) => p.id === Number(id));

  const estojo = {
    lapis: "Preto",
    caneta: "Esferográfica",
    borracha: "Branca",
  };

  estojo.lapis;
  estojo.caneta;
  const { lapis, caneta } = estojo;

  const jogos = ["Sonic", "Mario", "Zelda"];
  console.log(jogos[1]);
  const [sonic, mario] = jogos;

  return (
    <main>
      <h2>Editar Produtos</h2>
      <p>Página para editar produtos.</p>

      <p>Itens do Estojo</p>
      <p>Lápis: {lapis} </p>
      <p>Caneta: {caneta} </p>

      <p>Itens do Estojo</p>
      <p>Jogo: {sonic} </p>
      <p>Jogo: {mario} </p>

      {produto ? (
        <div>
          <p>Nome: {produto.nome}</p>
          <p>Nome: {produto.preco}</p>
        </div>
      ) : (
        <div>
          <p>Produtos não encontrados.</p>
        </div>
      )}
    </main>
  );
}
