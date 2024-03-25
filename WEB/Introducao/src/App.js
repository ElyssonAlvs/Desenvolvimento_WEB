// import HelloWorld from "./components/01-Hello_World/HelloWorld";
// import FuncoesInternas from "./components/02-Funcoes_internar/FuncoesInternas";
// import Loja from "./components/03-Props/Loja";
// import Curso from "./components/03-Props/Curso"
// import MeusDadosProps from "./components/05-Atividade00/02MeusDados"
// import Informacao from "./components/05-Atividade00/informacao";
// import Dados from "./components/05-Atividade00/01MeusDados";
// import Temperatura from "./components/05-Atividade00/03Temperatura"
// import SistemaSolar from "./components/06-Children/SistemaSolar";
// import Planeta from "./components/06-Children/Planeta";
// import Galaxia from "./components/06-Children/Galaxia";
// import ComPai from "./components/07-ComPaiFilho/ComPai";
// import Estado from "./components/08-Estados/Estado";
// import Pokemon from "./components/08-Estados/Pokemon";
// import { CompA } from "./components/09-PropDrilling/PropDrilling";
// import PokemonPrincipal from "./components/11-PokemonContexto/PokemonPrincipal";
// import Efeito from "./components/11-Efeitos/Efeito";
import ComponentePromessa from "./components/12-Promessa/MeuAsync";

function App() {
  return (
    <div>
      <h1>Desenvolvimento de Software para a WEB!</h1>
      <ComponentePromessa></ComponentePromessa>
    </div>
  )
}

//questão do children
/*function App() {
  return (
    <div>
      <h1> Desenvolvimento de Software para a WEB!</h1>
      <hr />
      <SistemaSolar>
        <Planeta nome="Mercúrio" tipo="Rochoso" ordem="1" />
        <hr />
        <Planeta nome="Vênus" tipo="Rochoso" ordem="2" />
        <hr />
        <Planeta nome="Terra" tipo="Rochoso" ordem="3" />
        <hr />
        <Planeta nome="Marte" tipo="Rochoso" ordem="4" />
        <hr />
        <Planeta nome="Júpiter" tipo="Gasoso" ordem="5" />
        <hr />
        <Planeta nome="Saturno" tipo="Gasoso" ordem="6" />
        <hr />
        <Planeta nome="Urano" tipo="Gasoso" ordem="7" />
        <hr />
        <Planeta nome="Netuno" tipo="Gasoso" ordem="8" />
      </SistemaSolar>
    </div>
  );
}*/

export default App;
