;
(function($, window, document, undefined){

  window.B = window.B || {};

  var $body = $('body');

  var autocomplete = function(input, dictionary) {
    return dictionary.filter(function(option) {
      return option.indexOf(input) == 0;
    });
  };

  B.autocomplete = function(selector) {

    $(selector).each(function() {

      var $el = $(this);
      var dictionary = $el.attr('data-autocomplete-dictionary').split(', ');
      var $list = null;

      if (!dictionary.length) return;

      $list = $('<ul></ul>');
      $list.css({
        'position': 'absolute',
        'z-index': '9999',
        'left': '-9999px',
        'background-color': '#dddddd',
        'padding': '3px',
        'border': '1px solid black'
      });

      $el
      .removeAttr('data-autocomplete-dictionary')
      .on('input', function() {

        var input = $el.val();
        if (!input) return $list.html('').css({'left': '-9999px', 'top': '0'});

        var suggestions = autocomplete(input, dictionary);
        if (!suggestions.length) return $list.html('').css({'left': '-9999px', 'top': '0'});

        $list.html('');
        $list = suggestions.reduce(function(prev, next) {
          var $item = $('<li></li>');
          $item
          .text(next)
          .on('click', function() {
            $el.val(next);
            $list.html('').css({'left': '-9999px', 'top': '0'});
          });
          prev.append($item);
          return prev;
        }, $list);

        var el_offset = $el.offset();
        var el_left = el_offset.left;
        var el_top = el_offset.top;
        var el_height = $el.height();
        var ac_top = el_top + el_height;
        $list.css({'left': el_left + 'px', 'top': ac_top + 'px'});
      })

      $body.append($list);

    });
  };

}(jQuery, window, document));
