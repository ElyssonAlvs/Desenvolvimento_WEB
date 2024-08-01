
# Flexbox 1

## HTML

```html
<html>
  <head>
    <title>Flexbox 3</title>
    <link rel="stylesheet" href="flexbox3.css" />
  </head>
  <body>
    <header>
      <h1>Sample flexbox example</h1>
    </header>
    <section>
      <article>
        <h2>First article</h2>
        <p>
          Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
        </p>
      </article>

      <article>
        <h2>Second article</h2>
        <p>
          Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
        </p>
      </article>

      <article>
        <div>
            <div id="button-container-0">
                <button>Smile</button>
                <button>Laugh</button>
                <button>Wink</button>
                <button>Shrug</button>
            </div>
            <div id="button-container-1">
                <button>Blush</button>
            </div>
        </div>

        <p>
          Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
        </p>

        <p>
          Cray food truck brunch, XOXO +1 keffiyeh pickled chambray waistcoat ennui. Organic small batch paleo 8-bit. Intelligentsia umami wayfarers pickled, asymmetrical kombucha letterpress kitsch leggings cold-pressed squid chartreuse put a bird on it. Listicle pickled man bun cornhole heirloom art party.
        </p>
      </article>
    </section>
  </body>
</html>
```

### Código CSS

```css
section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

header {
    background-color: purple;
    margin: 10px;
    padding: 10px;
    text-align: center;
}

article {
    background-color: rgb(0, 234, 255);
    margin: 10px;
    padding: 10px;
    flex: 2;
}

article:nth-of-type(2) {
    background-color: orange;
    margin: 10px;
    padding: 10px;
    flex: 2;
}

article:nth-of-type(3) {
    background-color: magenta;
    margin: 10px;
    padding: 10px;
    flex: 3 200px;
}

article:nth-of-type(3) div:nth-child(1) div:nth-child(1){
    display: flex;
    justify-content: space-evenly;
}

article:nth-of-type(3) div:nth-child(1) div:nth-child(2){
    display: flex;
}

button {
    flex: 1;
    margin: 5px;
    font-weight: bold;
}
```

### Explicação

#### HTML - Estrutura

1. **Estrutura Básica**: O documento HTML é uma estrutura básica que inclui um `<header>`, uma `<section>` com três `<article>` e alguns `<p>` para texto.
2. **Botões**: No terceiro `<article>`, há duas `<div>` com botões. A primeira `<div>` (`#button-container-0`) tem quatro botões, e a segunda (`#button-container-1`) tem um botão.

#### CSS

1. **Flexbox no `section`**: O `section` é configurado como um contêiner flexível com `display: flex;`. A propriedade `flex-direction: row;` organiza os itens em linhas, e `flex-wrap: wrap;` permite que os itens que não cabem na linha atual se movam para a próxima linha.

2. **Estilos do `header`**: O `header` tem uma cor de fundo roxa, margens e preenchimentos definidos, e o texto é centralizado.

3. **Estilos dos `article`**:
   - Todos os `article` têm um fundo azul claro, margens, preenchimento, e flex: 2, o que os faz crescer na proporção 2:1 em relação aos elementos irmãos que não têm um valor de `flex` específico.
   - O segundo `article` tem um fundo laranja e propriedades semelhantes ao primeiro.
   - O terceiro `article` tem um fundo magenta e a propriedade `flex: 3 200px;`, que permite que ele cresça mais, mas não fique menor que 200px.

4. **Botões**:
   - O seletor `article:nth-of-type(3) div:nth-child(1) div:nth-child(1)` estiliza a primeira `<div>` dentro do terceiro `<article>`. `display: flex;` e `justify-content: space-evenly;` distribuem os botões de forma uniforme.
   - O seletor `article:nth-of-type(3) div:nth-child(1) div:nth-child(2)` aplica `display: flex;` a segunda `<div>` dentro do terceiro `<article>`, mas não define `justify-content`.

5. **Botões Específicos**: Os botões têm `flex: 1;`, que permite que eles cresçam e se contraiam igualmente dentro de seus contêineres flexíveis. `margin: 5px;` adiciona espaçamento ao redor de cada botão, e `font-weight: bold;` torna o texto dos botões em negrito.
