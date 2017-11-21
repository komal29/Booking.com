;
(function($, window, document, undefined){

  window.B = window.B || {};

  var is_form_valid = function($el) {

    var result = true;

    $el.find('input').each(function() {

      var $input = $(this);

      if (!is_filled_if_required($input)) return result = false;

      switch ($input.attr('type')) {

        case 'text':
          if (!is_name_valid($input)) return result = false;
          break; 

        case 'email':
          if (!is_email_valid($input)) return result = false;
          break; 

        case 'tel':
          if (!is_tel_valid($input)) return result = false;
          break; 

        case 'password':
          if (!is_password_valid($input)) return result = false;
          break; 
      }

    });

    return result;
  };

  var is_filled_if_required = function($el) {
    return ($el.attr('required') !== undefined) ? !!$el.val() : true;
  };
  var is_name_valid = function($el) {
    // your logic here
    return true;
  };
  var is_email_valid = function($el) {
    // your logic here
    return true;
  };
  var is_tel_valid = function($el) {
    // your logic here
    return true;
  };
  var is_password_valid = function($el) {
    // your logic here
    return true;
  };

  B.validate = function (selector) {

    $(selector).each(function() {

      var $form = $(this);
      var is_validation_binded = $form.data('is_validation_binded');

      if (!!is_validation_binded) return;

      $form
      .data('is_validation_binded', true)
      .find('input[type=submit]')
      .on('click', function(e) {
        e.preventDefault();
        (is_form_valid($form)) ? $form.submit() : alert('invalid');
      });

    });
  };

}(jQuery, window, document));
