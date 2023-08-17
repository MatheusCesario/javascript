function contar(){
    var ini = window.document.getElementById('iini')
    var fim = window.document.getElementById('ifim')
    var pass = window.document.getElementById('ipas')
    var res = window.document.querySelector("div#res")


    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contado:'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if ( p <= 0){
            window.alert('Passo indvalido cosniderando passo 1 ')
            p = 1
        }


        if(i < f) {
            //crescente
            for(var c = i ;c <= f ; c += p)
            res.innerHTML += ` ${c} \u{1f449}`

        }else {
            for(var c = i ; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }


       
    }
    res.innerHTML += `\u{1F3C1}`


}
