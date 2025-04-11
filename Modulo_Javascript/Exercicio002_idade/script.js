function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value)> ano){
    window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // como se criasse no html dentro de uma div--- esse é outra maneira
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criancam.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmm.jpg')
            } else if(idade <50){
                //Adulto
                img.setAttribute('src', 'adultom.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'velho.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancaf.jpg')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'jovemmf.jpg')
            } else if (idade <50){
                //Adulto
                img.setAttribute('src', 'adultof.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'velha.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        resimg.appendChild(img)
    }
}