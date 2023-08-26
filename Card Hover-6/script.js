// No JavaScript needed my friend !

// Below code only for demo purposes
// You can remove the `&.hover,` class from the CSS
// if you don't need it (line no. 55)
$(document).ready(function() {
    var count = 0;
    var blocks = $(".block");
  
    var testEffect = setInterval(function() {
      $(blocks[count - 1]).removeClass("hover");
      $(blocks[count]).addClass("hover");
      count++;
      if (count > 10) clearInterval(testEffect);
    }, 1500);
  });
  