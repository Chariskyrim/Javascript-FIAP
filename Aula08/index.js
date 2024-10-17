/*
let x = 2
let v = Array(100)

v[0] = 1234
v[1] = 2500
v[2] = "fala fiote"
v[3] = 9
x = v[x]
console.log(v)
console.log(x)

let v1 = [31, 45, 56, 12, 8, 15, 9]
console.log(v1.length)
console.log(v1)
*/

let vetor1 = [37, 12, 56, 44, 23, 22, 92, 4, 72, 6]
vetor1.push(45)
console.log(vetor1);

function maior(a,b) {
    if(a<b) return -1
    if(a>b) return 1
    return 0
}


vetor1.sort((a,b) => {
    if(a<b) return -1
    if(a>b) return 1
    return 0
})

for(let i=0; i<vetor1.length; i++) {
    console.log("posição "+i,vetor1[i]);
}

for (let i in vetor1) {
    console.log("posição "+i,vetor1[i]);
    
}
