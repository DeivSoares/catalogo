function Continue() {
    var continuar = document.getElementById('continuar').value;
    location.href = "http://localhost:5501/Cat%C3%A1logo/index.html" + continuar;
}
function valida() {
    if (document.getElementById('usuario').value == '') {
        alert('Preencha o campo de Usuário');
        document.getElementById('usuario').focus();
        return false;
    }
    if (document.getElementById('usuario').value == 'Tchan') {
        return true;
    }

    if (document.getElementById('senha').value == '') {
        alert('Preencha o campo da Senha');
        document.getElementById('senha').focus();
        return false;
    }
    return true;
}