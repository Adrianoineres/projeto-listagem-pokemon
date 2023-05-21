/*
quando clicarmos no botão de troca de tema, temos que alterar a cor do temaa da página para as cores do tema claro ou do tema escuro 


 --objetivo -- 1 quando clicar no botao de troca, adicionar a classe modo-escuro no body pra que os estilos no modo escuro sejam aplicadas e mudar a imagem pra lua
             
         -- passo 1 --- pegar no js o elemento HTML  correspondente ao botao de troca de tem  

         --- passo 2 --- dar um jeito de pegaa no js o elemento html correspondente ao body
        
         ---- passo 3 --- dar um jeito de identificar o clique do usuario no botao de trocaa de tema
         
         ------ passo 4 ---- adicionar a classe modo-escuro no body

         ----- passo 5 ---- trocar  imagem do botao de alterar tema pra lua
         
         -objetivo 2 ---- quanddo clicar no botao de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e muddar a imaagem pro sol

           ---- passo 6-- remover  a classe do modo-escuro do body
           -----passso 7-- - trocar a imagem do botao de alterar tema praa sol 




*/




const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});
