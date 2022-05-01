function apagarCurso(id){
    $.ajax({
        url: `/curso/remove/${id}`,
        type: 'GET',
    })
    .done(function(msg){
        console.log(msg);
        window.location.href = '/curso';
    })
    .fail(function(msg){
        console.log(msg)
    })
}
function enviaDistancia(distancia){
  $.ajax({
      url: `/jogo/save/${distancia}`,
      type: 'GET',

  })
  .done(function(msg){
      console.log(msg);
      window.location.href = '/ranking';
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