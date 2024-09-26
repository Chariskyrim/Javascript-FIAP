//let nota1, nota2, media
//nota1 = parsecInt(prompt("Digite Nota 1: "))
//nota2 = parsecInt(prompt("Digite Nota 2: "))
//media = (nota1+nota2)/2
//console.log(`sua média é ${media}`)

function calcular()  {
    console.log("estou executando calcular");
    let elem1 = document.getElementById("campo1")
    let nota1 = parseInt(elem1.value)
    let elem2 = document.getElementById("campo1")
    let nota2 = parseInt(elem2.value)
    let media = (nota1 + nota2) / 2
    console.log(`sua média é ${media}`)
    
}

calcular()