//import Main from "./components/18-CRUD/Main";
import Questao01A from "./components/19-AP1-SI-2024/Questao01";
import Questao02 from "./components/19-AP1-SI-2024/Questao02";
import Questao03 from "./components/19-AP1-SI-2024/Questao03";
import Questao04 from "./components/19-AP1-SI-2024/Questao04";


function App() {
  return (
    <div>
      <h1>Desenvolvimento de Software para a WEB!</h1>
      <Questao01A />
      <hr />
      <Questao02 />
      <hr />
      <Questao03/>
      <hr />
      <Questao04/>
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
