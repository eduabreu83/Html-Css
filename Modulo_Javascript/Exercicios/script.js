
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'dia.png'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
    } else{
        img.src = 'noite.png'
    }
}