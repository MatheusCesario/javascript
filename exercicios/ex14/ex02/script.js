function gerar(){
    var num = window.document.querySelector('input#itxtn')
    var tab = window.document.getElementById('itabu')
    if (num.value.length == 0){
        window.alert('por favor, digite um número!')
    }else{
        var n = Number(num.value)
        var c = 1 
        tab.innerHTML = ''
        while(c <=10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

    }
   