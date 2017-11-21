# B.autocomplete
Simple autocomplete solution

Usage:
```
<input type="text" class="autocomplete" data-autocomplete-dictionary="apple, airplane, aircraft, google, glass">

$(function(){
  B.autocomplete('.autocomplete');
});

$(document).on('DOMSubtreeModified', function(){
  B.autocomplete('.autocomplete');
});
```
