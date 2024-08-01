# Importação de Bibliotecas

   ```javascript
   import "bootstrap/dist/css/bootstrap.min.css";
   import "bootstrap/dist/js/bootstrap.bundle.js";
   ```

   Aqui, estamos importando o CSS e o JavaScript do Bootstrap. O CSS é necessário para aplicar o estilo padrão do Bootstrap, e o JavaScript é necessário para funcionalidades interativas, como dropdowns e modais.

1. **Definição do Componente `MyNavbar`:**

   ```javascript
   const MyNavbar = () => {
       return (
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
               <div className="container-fluid">
                   <a className="navbar-brand" href="/">CRUD</a>
                   <div className="collapse navbar-collapse">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <a href="/" className="nav-link active">Home</a>
                           </li>
                           <li className="nav-item dropdown"> 
                               <a 
                                   href="#" 
                                   className="nav-link dropdown-toggle"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false"
                               >
                                       Dropdown
                               </a>
                               <ul className="dropdown-menu">
                                   <li>
                                       <a href="#" className="dropdown-item">Ação 1</a>
                                   </li>
                                   <li>
                                       <a href="#" className="dropdown-item">Ação 2</a>
                                   </li>
                               </ul>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       )
   }
   ```

   - `const MyNavbar = () => { ... }` define um componente funcional em React chamado `MyNavbar`.
   - Dentro do componente, retornamos JSX que representa a estrutura do nosso navbar.

   **Estrutura do Navbar:**
   - `<nav className="navbar navbar-expand-lg bg-body-tertiary">`: Cria um contêiner de navegação usando as classes do Bootstrap. `navbar-expand-lg` faz com que a navbar se expanda em dispositivos maiores, e `bg-body-tertiary` define a cor de fundo.
   - `<div className="container-fluid">`: Cria um contêiner fluído que ajusta o layout da navbar.
   - `<a className="navbar-brand" href="/">CRUD</a>`: Um link que representa a marca (o nome do site) na navbar.
   - `<div className="collapse navbar-collapse">`: Um contêiner que permite que o conteúdo da navbar colapse em telas menores.
   - `<ul className="navbar-nav me-auto mb-2 mb-lg-0">`: Lista de itens da navbar. `me-auto` alinha os itens à esquerda, e `mb-2 mb-lg-0` ajusta a margem inferior em diferentes tamanhos de tela.
   - `<li className="nav-item">`: Um item na lista de navegação.
   - `<a href="/" className="nav-link active">Home</a>`: Link para a página inicial.
   - `<li className="nav-item dropdown">`: Item da lista com um dropdown.
   - `<a href="#" className="nav-link dropdown-toggle" ... >`: Link que aciona o dropdown. `data-bs-toggle="dropdown"` é um atributo necessário para o Bootstrap lidar com o comportamento do dropdown.
   - `<ul className="dropdown-menu">`: Menu do dropdown.
   - `<li><a href="#" className="dropdown-item">Ação 1</a></li>`: Itens individuais do dropdown.

2. **Exportação do Componente:**

   ```javascript
   export default MyNavbar;
   ```

   Aqui, estamos exportando o componente `MyNavbar` para que ele possa ser importado e usado em outros arquivos.
