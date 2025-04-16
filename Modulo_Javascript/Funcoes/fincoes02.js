function soma(n1=0, n2=0){//o numero 0 é para atribuir um parametro para quando nao passar o parametro ele considere o 0 como parametro padrap
    return n1 + n2
}

console.log(soma(2,5))

//--------------------------------------------------------------
let v = function(x) {
    return x*2
}
console.log(v(5))


// fatorial - 5! - 5 x4 x 3 x 2 x 1

function fatorial(n){
    let fat = 1

    for(let c =n; c >1; c--){
        fat *=c
    }
    return fat
}

console.log(fatorial(5))
//----------------------------------------

// metodo recursiva
// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!
// n! = n x x (n-1)!

function fato(n){
    if (n == 1) {
        return 1
    } else {
        return n * fato(n-1)
    }
}

console.log(fato(5))