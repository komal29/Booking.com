;
(function($, window, document, undefined){

  window.B = window.B || {};

  B.tooltip = function (selector) {

    var $body = $('body');

    $(selector).each(function() {

      var $el = $(this);
      var tooltip_text = $el.attr('data-tooltip-text');
      var $tooltip = null;
      var tooltip_dims = null;

      if (!tooltip_text) return;

      $tooltip = $('<div></div>');
      $tooltip.text(tooltip_text);
      $tooltip.css({
        'position': 'absolute',
        'z-index': '9999',
        'left': '-9999px',
        'background-color': '#dddddd',
        'padding': '3px',
        'border': '1px solid black'
      });

      $el
      .removeAttr('data-tooltip-text')
      .mouseover(function() {
        var el_offset = $el.offset();
        var el_left = el_offset.left;
        var el_top = el_offset.top;
        var el_width = $el.width();
        var el_height = $el.height();
        var tt_left = el_left + (el_width / 2) - (tooltip_dims.width / 2);
        var tt_top = el_top - tooltip_dims.height - 6;
        $tooltip.css({'left': tt_left + 'px', 'top': tt_top + 'px'});
      })
      .mouseout(function() {
        $tooltip.css({'left': '-9999px', 'top': '0'});
      });

      $body.append($tooltip);
  
      tooltip_dims = {
        width: $tooltip.width(),
        height: $tooltip.height()
      };
    });

  };

}(jQuery, window, document));
