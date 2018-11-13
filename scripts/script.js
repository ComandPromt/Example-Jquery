// jquery/script.js
$(document).ready(function() {
 
  $('#first_form').submit(function(e) {
    e.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var edad = $('#edad').val();
    var email = $('#email').val();
    var password = $('#password').val();
 
    $(".error").remove();
 
    if (edad<=18 || edad>=100) {
      $('#edad').after('<span class="error">La edad debe estar entre 18 y 100</span>');
    }

    if (first_name.length < 1) {
      $('#first_name').after('<span class="error">Este campo debe rellenarse</span>');
    }

    if (last_name.length < 1) {
      $('#last_name').after('<span class="error">Este campo debe rellenarse</span>');
    }

    if (email.length < 1) {
      $('#email').after('<span class="error">Este campo debe rellenarse</span>');
    } else {
      var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Dirección de correo inválida</span>');
      }
    }
    if (password.length < 8) {
      $('#password').after('<span class="error">La clave debe tener al menos 8 caracteres</span>');
    }
    
  });
 
});