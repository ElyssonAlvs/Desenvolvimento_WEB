# Questao04.txt

## Resolução do Problema de Props Drilling com Contextos

## Introdução ao Props Drilling

Props Drilling ocorre quando você precisa passar dados de um componente pai para um componente filho, e depois para um neto, e assim por diante. Isso pode resultar em uma cadeia longa de componentes intermediários que recebem e repassam essas props, tornando o código mais difícil de manter e entender.

### Uso de Contextos para Resolver Props Drilling

O Context API do React é uma solução eficiente para evitar o Props Drilling. Com o Context API, você pode criar um "Contexto" que armazena dados e disponibiliza esses dados para qualquer componente na árvore de componentes, sem a necessidade de passar props manualmente através de cada nível da hierarquia.

**Exemplo:**

Vamos considerar um exemplo simples onde temos um tema que deve ser acessível por vários componentes:

1. **Sem Contexto (Props Drilling):**

   ```jsx
   // Componente Pai
   function App() {
     const [theme, setTheme] = React.useState('light');

     return <ParentComponent theme={theme} setTheme={setTheme} />;
   }

   // Componente Intermediário
   function ParentComponent({ theme, setTheme }) {
     return <ChildComponent theme={theme} setTheme={setTheme} />;
   }

   // Componente Filho
   function ChildComponent({ theme, setTheme }) {
     return (
       <div>
         <p>Theme: {theme}</p>
         <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
           Toggle Theme
         </button>
       </div>
     );
   }
   ```

   Neste exemplo, a prop `theme` e a função `setTheme` são passadas através dos componentes `ParentComponent` e `ChildComponent`.

2. **Com Contexto (Usando Context API):**

   Primeiro, criamos um contexto para o tema:

   ```jsx
   // TemaContext.js
   import React from 'react';

   const ThemeContext = React.createContext();

   export function ThemeProvider({ children }) {
     const [theme, setTheme] = React.useState('light');

     return (
       <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
       </ThemeContext.Provider>
     );
   }

   export function useTheme() {
     return React.useContext(ThemeContext);
   }
   ```

   Agora, podemos utilizar esse contexto em nossos componentes:

   ```jsx
   // Componente Pai
   function App() {
     return (
       <ThemeProvider>
         <ParentComponent />
       </ThemeProvider>
     );
   }

   // Componente Intermediário
   function ParentComponent() {
     return <ChildComponent />;
   }

   // Componente Filho
   function ChildComponent() {
     const { theme, setTheme } = useTheme();

     return (
       <div>
         <p>Theme: {theme}</p>
         <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
           Toggle Theme
         </button>
       </div>
     );
   }
   ```

**Explicação:**

No exemplo com Contexto, o `ThemeContext` é criado para gerenciar o estado do tema. O `ThemeProvider` fornece o estado do tema e a função para alterá-lo para todos os componentes dentro de sua árvore. Dessa forma, o `ChildComponent` pode acessar diretamente o estado e a função de alteração do tema sem precisar receber props de seus componentes ancestrais, eliminando a necessidade de Props Drilling.
