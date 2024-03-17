# Sistema Solar

## Galaxia Component

O componente `Galaxia` é responsável por exibir informações sobre uma galáxia específica e seu sistema solar. Ele recebe o nome da galáxia como propriedade e renderiza um título com o nome da galáxia, seguido por um componente `SistemaSolar` que encapsula uma lista de planetas.

## Planeta Component

O componente `Planeta` representa um planeta do sistema solar. Ele recebe as seguintes propriedades: nome, tipo, ordem e galáxia. Essas propriedades são exibidas para o usuário.

## SistemaSolar Component

O componente `SistemaSolar` é um componente funcional que recebe props de children e galaxia. Ele renderiza um título indicando o sistema solar da galáxia e, em seguida, mapeia os elementos filhos (planetas). Para cada planeta, ele clona o elemento e passa a prop galaxia para ele.