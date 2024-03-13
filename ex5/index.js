function reverseString(string) {
// separando a string em  um array de caracteres
let caracteres = string.split('')

// left é a primeira posição da string, right a última
let left = 0
let right = caracteres.length - 1

while (right > left) {
    let temp = caracteres[right]
    // a letra da ultima posição agora é a primeira
    caracteres[right] = caracteres[left]
     // a letra da primeira posição agora é a ultima
    caracteres[left] = temp
    left ++ 
    right --
}

// transformando novamente em uma string
let reversed = caracteres.join('')

alert(reversed)
}


let string = prompt('Digite a string que deseja ser invertida')

reverseString(string)

