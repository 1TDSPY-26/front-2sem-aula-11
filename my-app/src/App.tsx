import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return (
    <div className="App">
      <Cabecalho />
      <main>
        <Conteudo />
      </main>
      <Rodape />
    </div>
  );
}
