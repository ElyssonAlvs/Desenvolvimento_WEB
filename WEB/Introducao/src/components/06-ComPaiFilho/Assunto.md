# ComPai e ComFilho

Este é um exemplo simples de comunicação entre componentes em React, onde um componente pai (ComPai) passa uma mensagem para um componente filho (ComFilho) e o componente filho pode enviar uma mensagem de volta para o pai.

## ComPai
O componente ComPai é o componente pai. Ele possui uma função receberMensagemDoFilho que é passada para o componente filho como uma propriedade. Essa função é chamada quando o componente filho deseja enviar uma mensagem de volta para o pai.

## ComFilho
O componente ComFilho é o componente filho. Ele recebe a mensagem do pai como uma propriedade e possui um botão que, quando clicado, chama a função enviarMensagemParaOPai passada pelo pai.