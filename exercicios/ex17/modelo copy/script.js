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
    
}