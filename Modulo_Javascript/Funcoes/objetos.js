let amigo = {nome: 'edu', 
    sexo: 'M', 
    peso: 87, 
    engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)