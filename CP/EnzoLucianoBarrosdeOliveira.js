
function num_primo(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function contar_primos(x, y) {
    let contador = 0;
    for (let i = x; i <= y; i++) {
        if (num_primo(i)) {
            contador++;
        }
    }
    console.log("Existem " + contador + " números primos entre " + x + " e " + y + ".");
}

function calcular_moedas(valor) {
    const moedas = [100, 50, 10, 5, 1];
    let quantidadeMoedas = [0, 0, 0, 0, 0];
    let resto = valor;

    for (let i = 0; i < 5; i++) {
        const moeda = moedas[i];
        let contadorMoedas = 0;
        
        while (resto >= moeda) {
            contadorMoedas++;
            resto -= moeda;
        }
        
        quantidadeMoedas[i] = contadorMoedas;
    }

    for (let i = 0; i < 5; i++) {
        console.log(quantidadeMoedas[i] + " moeda(s) de M$ " + moedas[i]);
    }
}

function fibonacci(n) {
    let a = 1, b = 1, proximo;

    if (n >= 1) console.log(a);
    if (n >= 2) console.log(b);

    for (let i = 3; i <= n; i++) {
        proximo = a + b;
        console.log(proximo);
        a = b;
        b = proximo;
    }
}

console.log(num_primo(7));
console.log(num_primo(10));

contar_primos(10, 50); 

calcular_moedas(321); 

fibonacci(10); 