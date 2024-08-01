# FlexBox 0

## HTML

```html
<html>
  <head>
    <title>Flexbox 0</title>
    <link rel="stylesheet" href="flexbox0.css" />
  </head>
  <body>
    <header>
      <h1>Sample flexbox example</h1>
    </header>
    <section>
      <article>
        <h2>First article</h2>
        <p>... conteúdo do primeiro artigo ...</p>
      </article>
      <article>
        <h2>Second article</h2>
        <p>... conteúdo do segundo artigo ...</p>
      </article>
      <!-- Mais artigos aqui -->
    </section>
  </body>
</html>
```

**Explicação do HTML:**

1. **Estrutura básica:** O documento HTML começa com a declaração do tipo de documento (`<!DOCTYPE html>`), seguida pela abertura e fechamento da tag `<html>`.
2. **Cabeçalho (`<head>`):** Contém o título da página (`<title>`) e o link para a folha de estilo CSS (`<link rel="stylesheet" href="flexbox0.css" />`).
3. **Corpo (`<body>`):** Contém a estrutura principal da página.
   - **Cabeçalho (`<header>`):** Envolve um título (`<h1>`).
   - **Seção (`<section>`):** Contém vários artigos (`<article>`), cada um com seu próprio título (`<h2>`) e parágrafos (`<p>`).

### CSS 0

```css
section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

header {
    background-color: red;
    margin: 10px;
    padding: 10px;
    text-align: center;
}

article {
    background-color: rgb(0, 234, 255);
    margin: 10px;
    padding: 10px;
    flex: 300px;
}

#teste {
    width: 150px;
}
```

**Explicação do CSS:**

1. **`section`**
   - **`display: flex;`**: Define a seção como um contêiner flexível, ativando o Flexbox.
   - **`flex-direction: row;`**: Define a direção dos itens flexíveis (filhos diretos de `section`) como uma linha horizontal.
   - **`flex-wrap: wrap;`**: Permite que os itens flexíveis quebrem a linha e se organizem em múltiplas linhas se necessário.

2. **`header`**
   - **`background-color: red;`**: Define a cor de fundo do cabeçalho como vermelho.
   - **`margin: 10px;`**: Adiciona uma margem de 10 pixels ao redor do cabeçalho.
   - **`padding: 10px;`**: Adiciona um preenchimento de 10 pixels dentro do cabeçalho.
   - **`text-align: center;`**: Centraliza o texto dentro do cabeçalho.

3. **`article`**
   - **`background-color: rgb(0, 234, 255);`**: Define a cor de fundo do artigo.
   - **`margin: 10px;`**: Adiciona uma margem de 10 pixels ao redor de cada artigo.
   - **`padding: 10px;`**: Adiciona um preenchimento de 10 pixels dentro de cada artigo.
   - **`flex: 300px;`**: Define a base flexível dos artigos com 300 pixels de largura.

4. **`#teste`**
   - **`width: 150px;`**: Define a largura do elemento com o ID `teste` como 150 pixels.

### Como funciona o Flexbox nesse código

- A seção (`<section>`) é o contêiner flexível, e os artigos (`<article>`) são os itens flexíveis.
- `flex-direction: row;` organiza os artigos horizontalmente em uma linha.
- `flex-wrap: wrap;` permite que os artigos quebrem a linha e formem novas linhas quando não houver espaço suficiente na linha atual.
- O valor de `flex` no `article` (`flex: 300px;`) sugere que cada artigo deve tentar ocupar uma largura de 300 pixels, ajustando-se conforme o espaço disponível.
