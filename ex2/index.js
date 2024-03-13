// sequencia de fibonnaci
// 0, 1, 1, 2, 3, 5, 8, 13, 21

function verificFib(number) {
    let a = 0
    let b = 1

    while(b < number) {
        //variável temporária para armazenar o valor antigo de b
        let temp = b
        b = a + b
        a = temp
    }

    return b === number
}

const number  = parseInt(prompt("Digite um número"))

if(verificFib(number)) {
    alert("Pertence a sequencia de fibonnaci")
} else {
    alert(" Não Pertence a sequencia de fibonnaci")
}

