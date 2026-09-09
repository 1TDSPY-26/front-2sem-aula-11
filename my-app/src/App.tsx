import { Outlet } from 'react-router';
import ObservadorDeRota from './components/ObservadorDeRota';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Rodape from './components/Rodape/Rodape';

export default function App() {
  return (
    <>
      <ObservadorDeRota />
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  );
}