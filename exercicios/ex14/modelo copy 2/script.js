function gerar(){
    var num = window.document.getElementById('inum') 
    var tab = window.document.querySelector('select#itab')
    if(num.value.length == 0){
        alert('[erro]')

    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${c} X ${n} = ${c*n}`
            item.value = `tab${n}`
            tab.appendChild(item)
        }
    }
}