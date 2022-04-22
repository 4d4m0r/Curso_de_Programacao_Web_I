function apagarCurso(id){
    $.ajax({
        url: `/curso/${id}`,
        type: 'DELETE',

    })
    .done(function(msg){
        console.log(msg);
        window.location.href = '/curso';
    })
    .fail(function(msg){
        console.log(msg)
    })
}
var senha = document.getElementById("senha")
  , confirmaSenha = document.getElementById("confirmar-senha");

function validatePassword(){
  if(senha.value != confirmaSenha.value) {
    confirmaSenha.setCustomValidity("Senhas diferentes!");
  } else {
    confirmaSenha.setCustomValidity('');
  }
}

senha.onchange = validatePassword;
confirmaSenha.onkeyup = validatePassword;