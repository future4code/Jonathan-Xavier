/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   //  console.log("Bem vindo ao jogo Blackjack")

   //  if(confirm("Quer iniciar uma nova rodada?")) {
   //    console.log("Iniciando partida")// o que fazer se o usuário clicar "ok"
   // } else {
   //    console.log("O jogo acabou!")// o que fazer se o usuário clicar "cancelar"
   // }

   // const carta = comprarCarta(); //Sorteia uma carta
   // const carta2 = comprarCarta();
   // const carta3 = comprarCarta();

   //  console.log("Cartas Usuário:", carta.texto + carta2.texto + carta3.texto, "pontuação:", carta.valor + carta2.valor + carta3.valor) // imprime o naipe da carta e valor da carta do usuário
  
   //  // Cartas do computador
   //  console.log("Cartas computador:", carta3.texto, "pontuação:", carta3.valor)
   
   // if (carta.valor > carta2.valor) {
   //    console.log("o Usuário ganhou!");
   // }if (carta.valor < carta2.valor) {
   //    console.log("o computador ganhou!");
   // }if (carta.valor === carta2.valor) {
   //    console.log("Empate!")
   // }
  alert("Bem vindo ao jogo Blackjack")
    
    let jogo = confirm("Quer iniciar uma nova rodada?")
    let cartasUsuario = []
    let cartasPc = []

    if (jogo) {
       let carta1Usuario = comprarCarta()
       let carta2Usuario = comprarCarta()
       let carta1Pc = comprarCarta()
       let carta2Pc = comprarCarta()

      if (carta1Usuario.valor, carta2Usuario.valor, carta1Pc.valor, carta2Pc.valor === 22){
            let sorteio = confirm("Sorteie novamente", comprarCarta())
   } else {
         console.log("Jogo Válido")
   }

       let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
       let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

       console.log(`Usuário - cartas ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
       console.log(`Computador - cartas ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)


       if (pontuacaoUsuario > pontuacaoPc) {
          console.log("O usuário ganhou!")
       } else if (pontuacaoPc > pontuacaoUsuario) {
          console.log("O computador ganhou!")
       } else (pontuacaoUsuario === pontuacaoPc)
          console.log("Empate!")
       } else {
      console.log("O jogo acabou!")
}
