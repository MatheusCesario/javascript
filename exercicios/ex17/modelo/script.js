let num = document.querySelector('input#txti')
let lista = document.querySelector('select#ilista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true 
    } else {
        return false
    }
}

function inLista(n, l){

    if(l.indexOf(Number(n)) != -1 ){
        return true
    } else{
        return false
    }

}


function add(){
    if(isNumero(num.value) && !inLista(num.value, valores) ){
        valores.push(Number(num.value)) 
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado!`
        lista.appendChild(item)
       
    } else {
        alert('Número invalido ou ja esta na lista!')
    }
    num.value =  ''
    num.focus()
    res.innerHTML = ''

}

function fim(){
    if( valores.length == 0 ){
        res.innerHTML = '<p>Adicione valores antes de finalizar!</p>'
    } else {
        let ttl = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media 
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior )
                maior = valores[pos] 
            if(valores[pos] < menor )
                menor = valores[pos]
        }
        media = soma / ttl

        res.innerHTML = ""
        res.innerHTML += `<p>há ${ttl} items totais</p>`
        res.innerHTML += `<p>o maior numero informado foi ${maior}</p>`
        res.innerHTML += `<p>o menor numero informado foi ${menor}</p>`
        res.innerHTML += `<p> ha soma total é ${soma}`
        res.innerHTML += `<p> a media dos valores é ${media}`

    }
}
