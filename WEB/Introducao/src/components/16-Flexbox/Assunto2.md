# Flexbox 2

## HTML

```html
<html>
  <head>
    <title>Flexbox 2</title>
    <link rel="stylesheet" href="flexbox2.css" />
  </head>
  <body>
    <header>
      <h1>Sample flexbox example</h1>
    </header>
    <div>
      <button>Smile</button>
      <button>Laugh</button>
      <button>Wink</button>
      <button>Shrug</button>
      <button>Blush</button>
    </div>
  </body>
</html>
```

1. **`<html>`**: Define o início do documento HTML.
2. **`<head>`**: Contém metadados sobre o documento, como o título e links para arquivos CSS.
3. **`<title>`**: Define o título da página, que aparece na aba do navegador.
4. **`<link>`**: Faz referência ao arquivo CSS externo `flexbox2.css`.
5. **`<body>`**: Contém o conteúdo visível da página.
6. **`<header>`**: Define uma seção de cabeçalho, geralmente usada para títulos e informações de introdução.
7. **`<h1>`**: Define um título principal para a página.
8. **`<div>`**: Um contêiner genérico que agrupa os botões.
9. **`<button>`**: Define botões com diferentes textos.

## CSS

```css
html {
    font-family: sans-serif;
}
  
body {
    width: 70%;
    margin: 20px auto;
}
  
header {
    background-color: antiquewhite;
    text-align: center;
}
  
h1 {
    padding: 5px;
}
  
button {
    font-size: 18px;
    line-height: 1.5;
    width: 15%;
    height: 30px;
    margin: 2px;
}
  
div {
    height: 300px;
    border: 1px solid black;
    padding: 5px;
  
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
  
button:first-child {
    order: 1;
}
  
button:nth-child(4) {
    align-self: flex-start;
}
```

1. **`html`**: Define a fonte padrão como sans-serif para o documento.
2. **`body`**: Define a largura do corpo da página como 70% da largura da janela, centralizando-o com uma margem automática e adicionando uma margem de 20px.
3. **`header`**: Define o fundo do cabeçalho como antiquewhite e centraliza o texto.
4. **`h1`**: Adiciona um preenchimento de 5px ao título.
5. **`button`**: Define o estilo dos botões, com fonte de 18px, altura de 30px, largura de 15% do contêiner pai e uma margem de 2px ao redor.
6. **`div`**: Define o estilo do contêiner dos botões:
   - **`height`**: Altura de 300px.
   - **`border`**: Borda de 1px sólida e preta.
   - **`padding`**: Espaçamento interno de 5px.
   - **`display: flex`**: Torna o contêiner um flex container.
   - **`flex-direction: row`**: Alinha os itens em uma linha horizontal.
   - **`justify-content: space-evenly`**: Distribui os botões com espaço igual entre eles.
   - **`align-items: center`**: Alinha os botões verticalmente ao centro.
7. **`button:first-child`**: Define a ordem do primeiro botão para 1, o que pode ser usado em combinação com outros valores de ordem para reordenar os itens no layout flexível.
8. **`button:nth-child(4)`**: Define o alinhamento do quarto botão (o "Shrug") para o início do contêiner (`flex-start`), fazendo com que ele se alinhe ao topo do contêiner flexível.
