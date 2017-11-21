# B.validate
Simple solution for form validation w/ jQuery

Usage:
```

<form class="form">
  <input type="text" name="username" required>
  <input type="email" name="email" required>
  <input type="tel" name="tel">
  <input type="password" name="password">
  <input type="submit" value="Submit">
</form>

$(function(){
  B.validate('.form');
});

$(document).on('DOMSubtreeModified', function(){
  B.validate('.form');
});
```
