let num = window.document.querySelector('input#itxtn')
let lista = window.document.querySelector('select#lista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumeros(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNumeros(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)

    } else{
        alert('valor invalido ou já validado')

    }
    num.focus()
    num.value = ''
}

function fim(){
    let ttl = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    
    for(let pos in valores){
        soma += valores[pos] 
            if(maior < valores[pos])
                maior = valores[pos]
            if(menor > valores[pos])
               menor = valores[pos]
    }
    media = soma/ttl 



    res.innerHTML = `<p>o totol de valores é ${ttl}</p>`
    res.innerHTML += `<p>o maior valor é ${maior}</p>`
    res.innerHTML += `<p>o menor valor é ${menor}</p>`
    res.innerHTML += `<p> o soma total é ${soma}</p>`
    res.innerHTML += `<p> a media total é ${media}</p>`
    
}