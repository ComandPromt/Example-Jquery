// jquery/script_plugin.js
$(document).ready(function() {
  $('form[id="first_form"]').validate({
    rules: {
      first_name: 'required',
      last_name: 'required',
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      edad: {
        range: [19, 99]
     
      }
    },
    messages: {
      first_name: 'This field is required',
      last_name: 'This field is required',
      email: 'Enter a valid email',
      password: {
        minlength: 'Password must be at least 8 characters long'
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  }); 
});