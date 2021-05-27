// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui

  let altura = Number(prompt("Qual altura do retangulo?")) 
  let largura = Number(prompt("Qual largura do retangulo?")) 
  let resultado = altura * largura 
  
  console.log(resultado)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
  let idade = anoAtual - anoNascimento

  console.log(idade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  let peso = Number(prompt("Digite seu peso atual"))
  let altura = Number(prompt("Digite sua altura em metros"))
  let imc = peso / (altura * altura)

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

  let nome = (prompt("Digite seu nome"))
  let idade = Number(prompt("Digite sua idade"))
  let email = (prompt("Digite seu email"))

  console.log("Meu nome é "+nome+", tenho "+idade+" anos, e o meu email é "+email+".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  let cor1 = (prompt("Qual sua cor favorita em primeiro lugar?"))
  let cor2 = (prompt("Qual sua cor favorita em segundo lugar?"))
  let cor3 = (prompt("Qual sua cor favorita em terceiro lugar?"))

  console.log([cor1,cor2,cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let texto = (prompt("Digite o que desejar"))

  console.log(texto.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui

  let custoEspetaculoTeatro = Number(prompt("Quanto custa um espetaculo de teatro?"))
  let valorIngresso = Number(prompt("Qual o valor do ingresso?"))
  let lucro = custoEspetaculoTeatro / valorIngresso

  console.log(lucro)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  let texto1 = (prompt("Digite o que desejar".length))
  let texto2 = (prompt("Digite o que desejar novamente".length))
  let tamanho1 = texto1 > texto2
  let tamanho2 = texto1 < texto2
  let tamanho3 = texto1 == texto2
  
  console.log(tamanho1,tamanho2,tamanho3)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  let texto1 = (prompt("Digite o que desejar"))
  let texto2 = (prompt("Digite o que desejar novamente"))

  let comparacao = (texto1.toLowerCase() == texto2.toLowerCase())

  console.log(comparacao)


}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui

   const anoAtual = Number(prompt("Em que ano estamos?"))
   const anoNascimento = Number(prompt("Em que ano voce nasceu?"))
   const anoRG = Number(prompt("Em que ano seu RG foi emitido?"))
   
   const idade = (anoAtual - anoNascimento)
   const idadeEmissaoRG = (anoAtual - anoRG)

   const RG = ((idade <=20) && (idadeEmissaoRG >= 5)) || ((idade > 20) && (idade <= 50) && (idadeEmissaoRG >= 10)) || ((idade > 50) && (idadeEmissaoRG >= 15))
  
   console.log(RG)

   
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}