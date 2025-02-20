import email from "./trechos/email.js"
import nomes from "./trechos/nomes.js"
import sobrenomes from "./trechos/sobrenomes.js"

export function rgFake() {
    return Math.random().toString().slice(3, 12)
}

export function namesFake() {
    let idx = parseInt(Math.random()*nomes.length)
    return nomes[idx]
}

export function lastnameFake() {
    let idx = parseInt(Math.random()*sobrenomes.length)
    return sobrenomes[idx]
}

export function emailFake(nome) {
    let idx = parseInt(Math.random()*email.length)
    let dominio = email[idx]
    return nome.toLowerCase()+"@"+dominio
}
//console.log(nomes);