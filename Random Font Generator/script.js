window.onload = selectFont;

function randomFont(){
  let fonts = ['franklin-gothic-atf', 'neue-haas-grotesk-display','linotype-sabon', 'gill-sans-nova','ff-scala','interstate','mrs-eaves','goudy-old-style','ff-meta-correspondence-web-p','clarendon-urw','baskerville-urw', 'bodoni-urw','futura-pt','adobe-caslon-pro','garamond-premier-pro','news-gothic-std'];

  let newFont = fonts[Math.floor(Math.random() * fonts.length)];
  document.body.style.fontFamily=newFont;
  document.getElementById("mySelect").value = newFont;
  document.getElementById("mySelect").style.fontFamily = newFont;
  document.getElementById("randomButton").style.fontFamily = newFont;
  document.getElementById("customText").style.fontFamily = newFont;
}

function selectFont(){
  selection = document.getElementById("mySelect").value;
  document.body.style.fontFamily=selection;
  document.getElementById("mySelect").style.fontFamily = selection;
  document.getElementById("randomButton").style.fontFamily = selection;
  document.getElementById("customText").style.fontFamily = selection;
}

let slider = document.getElementById("fontSize");
let output = document.getElementById("value");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
    output.innerHTML = this.value;    
    let newSize = slider.value;
    document.body.style.fontSize = newSize;
    let elem = document.body;
    let currentSize = window.getComputedStyle(elem, null).getPropertyValue("font-size");
      currentSize = newSize + 'px';
    document.body.style.fontSize = currentSize;

}


