let amigo = {nome: 'jose', sexo:'M',peso:85,
 engordar(p=0){
    console.log(`${amigo.nome} engordou ${p}Kg`)
    this.peso += p 
 }}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)