let num = [5,4,5,5,5,7,8]
num.push(9) //adicionar um novo elemento na lista do array
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`o Vetor tem ${num.length} posições`)

for (let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o Valor ${num[pos]}`)
}