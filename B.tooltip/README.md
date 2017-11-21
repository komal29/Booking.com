# B.tooltip
Simple tooltip solution w/ jQuery

Usage:
```
<a class="tooltip" data-tooltip-text="this is tooltip">Hover me</a>

$(function(){
  B.tooltip('.tooltip');
});

$(document).on('DOMSubtreeModified', function(){
  B.tooltip('.tooltip');
});
```
