//Exercícios de interpretação de código

//1.

//a.Será impresso na ordem o item e seu valor (Ex.:itemApelido:"indexMandi")
// apelido: "Mandi"
// nome: "Amanda Rangel"

// apelido: "Laura"
// nome: "Laís Petra"

// apelido: "Chijo"
// nome: "Letícia Chijo"

//---------------------------
//2.

//b.
//Será impresso uma nova array: (3) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//-----------------------------------------------------------------------------------------
//3.

//c.
//Será impresso primeiro os apelidos e depoisn os nomes, desde que não contenham "Chijo"
// apelido: "Mandi"
// nome: "Amanda Rangel"
// apelido: "Laura"
// nome: "Laís Petra"

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//Exercícios de escrita de código

//1.
//a.
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const novoArrayNomes = pets.map((item, index, array) => {
//     return item.nome
//  })

//  console.log(novoArrayNomes)

//--------------------------------------------------------------

//b.
//  const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const novoArraySalsicha = pets.filter((inputRaca) => {
//     return inputRaca.raca === 'Salsicha'
//  })
// console.log(novoArraySalsicha)
//---------------------------------------------------------------

//c.
// const pets = [
//         { nome: "Lupin", raca: "Salsicha"},
//         { nome: "Polly", raca: "Lhasa Apso"},
//         { nome: "Madame", raca: "Poodle"},
//         { nome: "Quentinho", raca: "Salsicha"},
//         { nome: "Fluffy", raca: "Poodle"},
//         { nome: "Caramelo", raca: "Vira-lata"},
//      ]
// const poodle = pets.filter((inputRaca) => {
//     return inputRaca.raca === `Poodle`
// })
//   console.log(poodle)

// const nome = poodle.map((inputNome) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a, ${inputNome.nome}`
// })
//  console.log(nome)
// //-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//2.

//a.
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
//  const novoArrayNomes = produtos.map((item, index, array) => {
//         return item.nome
//      })
    
//      console.log(novoArrayNomes)
//---------------------------------------------------------------------------------------------
//b.
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

//  const novoArrayPrecos = produtos.map((item, index, array) => {
//     const precoDesconto = item.preco - item.preco / (100 * 0.5)  
//     console.log(item.nome, precoDesconto)
//  })
//------------------------------------------------------------------------------------------------
//c.
// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]
// const novoArrayCategoria = produtos.filter((item, index, array) => {
//            return item.categoria === "Bebidas"
//         })
       
//         console.log(novoArrayCategoria)
//----------------------------------------------------------------------------------------------------
//d.
// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// const novoArrayYpe = produtos.filter((item, index, array) => {
//       return item.nome.includes(`Ypê`)
// })

//    console.log(novoArrayYpe)
//------------------------------------------------------------------------------------
//e.
// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]
// const nome = produtos.filter((inputLimpeza) => {
//        return inputLimpeza.nome.includes(`Ypê`)
//    })
//       console.log(nome)

//    const precoFinal = nome.map((inputNome) => {
//        return `Compre, ${inputNome.nome}, por, ${inputNome.preco}`
//    })
//     console.log(precoFinal)

    