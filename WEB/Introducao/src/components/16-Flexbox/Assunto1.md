# Flexbox 1

## HTML

```html
<html>
  <head>
    <title>Flexbox 1</title>
    <link rel="stylesheet" href="flexbox1.css" />
  </head>
  <body>
    <header>
      <h1>Sample flexbox example</h1>
    </header>
    <section>
      <article>
        <h2>First article</h2>
        <p>Conteúdo do primeiro artigo...</p>
      </article>

      <article>
        <h2>Second article</h2>
        <p>Conteúdo do segundo artigo...</p>
      </article>

      <article>
        <h2>Third article</h2>
        <p>Conteúdo do terceiro artigo...</p>
        <p>Mais conteúdo do terceiro artigo...</p>
      </article>
    </section>
  </body>
</html>
```

### Explicação do HTML

1. **Estrutura Básica**:
   - O HTML segue uma estrutura básica com uma tag `<html>` contendo `<head>` e `<body>`.

2. **Head**:
   - Contém o título da página definido por `<title>`.
   - Linka a folha de estilo CSS com `<link rel="stylesheet" href="flexbox1.css" />`.

3. **Body**:
   - Inclui um `<header>` com um título `<h1>`.
   - Um `<section>` que contém três `<article>`, cada um com um título `<h2>` e parágrafos `<p>`.

## CSS

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
```

### Explicação do CSS

1. **section**:
   - `display: flex`: Define que o elemento `section` usa Flexbox.
   - `flex-direction: row`: Organiza os elementos filhos (artigos) em uma linha horizontal.
   - `flex-wrap: wrap`: Permite que os artigos "quebrem" para a próxima linha se não houver espaço suficiente em uma única linha.

2. **header**:
   - `background-color: purple`: Define a cor de fundo como roxa.
   - `margin: 10px`: Define uma margem de 10px ao redor do header.
   - `padding: 10px`: Adiciona um padding de 10px dentro do header.
   - `text-align: center`: Centraliza o texto dentro do header.

3. **article**:
   - `background-color: rgb(0, 234, 255)`: Define a cor de fundo como um tom de azul.
   - `margin: 10px`: Define uma margem de 10px ao redor dos artigos.
   - `padding: 10px`: Adiciona um padding de 10px dentro dos artigos.
   - `flex: 2`: Define que cada artigo ocupa 2 partes do espaço disponível, sem configuração mínima ou máxima.

4. **article:nth-of-type(2)**:
   - `background-color: orange`: Define a cor de fundo como laranja para o segundo artigo.
   - Mantém as mesmas margens, padding e flex-grow.

5. **article:nth-of-type(3)**:
   - `background-color: magenta`: Define a cor de fundo como magenta para o terceiro artigo.
   - `flex: 3 200px`: Define que o terceiro artigo ocupa 3 partes do espaço disponível, com uma base mínima de 200px.

### Resultados Esperados

- O `header` estará centralizado e terá uma cor de fundo roxa.
- Os artigos estarão organizados horizontalmente dentro da seção. Se não houver espaço suficiente, os artigos quebrarão para a próxima linha.
- O primeiro artigo terá um fundo azul e ocupará duas partes do espaço disponível.
- O segundo artigo terá um fundo laranja e também ocupará duas partes do espaço disponível.
- O terceiro artigo terá um fundo magenta e ocupará três partes do espaço disponível com um tamanho mínimo de 200px.
