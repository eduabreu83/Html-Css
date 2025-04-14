function contar(){
    let ini = document.getElementById(`txti`)
    let fim = document.getElementById(`txtf`)
    let passo = document.getElementById(`txtp`)

    if (ini.ariaValueMax.length == 0 || fim.ariaValueMax.length == 0 || passo.ariaValueMax.length == 0){
        window.alert('[ERRO - Favor inserir os dados! ')
    } else {
        alert('Tudo ok')
    }
}
