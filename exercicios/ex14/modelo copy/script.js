function gerar(){
    var ini = window.document.querySelector('input#txti')
    var fim = window.document.querySelector('input#txtf')
    var pas = window.document.querySelector('input#txtp')

    if ( ini.value.legth == 0 || fim.value.legth == 0 || pas.value.length == 0) {
        alert('[ERRO!!] utilize o campo acima para gerar a sequencia')
    } else{
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if( p <= 0){
            alert(' erro passo nao pode ser igual a 0 ')
            p = 1
           
        }
        
        var res = window.document.querySelector('div#res')

        res.innerHTML = ''

     
       
        if (i < f){
            var c = i
            while ( c <= f ){
                res.innerHTML += `${c} `
                c += p
            }
        }else if(i > f )
        for( c = i ; c >= f ; c -= p){
            res.innerHTML += `${c} `
        }
    
    }

}