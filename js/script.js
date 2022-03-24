function calcular(){
let body = document.querySelector("body")
let divTabela = document.querySelector("#tabela")

let table = document.createElement("table")
let trResults = document.createElement("tr")
let trTitulo = document.createElement("tr")
let altura = document.querySelector("#altura").value
let peso = document.querySelector("#peso").value

let thNome = document.createElement("th")
thNome.append(
    document.createTextNode("Nome")
)

let thImc = document.createElement("th")
thImc.append(
    document.createTextNode("IMC")
)

let tdNome = document.createElement("td")
tdNome.append(
    document.querySelector("#nome").value
)

let tdImc = document.createElement("td")
tdImc.append(
    parseFloat (peso / (altura * altura)).toFixed(6)
)  
   

let qtdLinhas = table.rows.length
let linha = table.insertRow(qtdLinhas)


let cellNome = linha.insertCell(0)
let cellImc = linha.insertCell(1)


cellNome.append(tdNome)
cellImc.append(tdImc)
trResults.append(tdNome)
trResults.append(tdImc)
trTitulo.append(thNome)
trTitulo.append(thImc)
table.append(trTitulo)
table.append(trResults)
divTabela.append(table)
body.append(divTabela)
}