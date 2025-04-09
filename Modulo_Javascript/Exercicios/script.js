
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'dia.png'
        document.body.style.background = '#blue'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
         document.body.style.background = '#e2cd9f'
    } else{
        img.src = 'noite.png'
         document.body.style.background = 'gray'
    }
}