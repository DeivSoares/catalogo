function avaliar(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()            
    var resenha = document.getElementById('resenha')
    var ref = document.getElementById('ref')
    var referencia = resenha.value
    ref.innerHTML = ''
    ref.innerHTML = `Você digitou <br>${hora}:${min}: ${referencia}`
    resenha.value = ''
    resenha.focus()
}