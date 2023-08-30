document.addEventListener("keyup", event => {
    const h1Element = document.querySelector("h1");
    h1Element.classList.add("swing-in-top-fwd")
    h1Element.addEventListener('animationend', () => {
      h1Element.classList.remove("swing-in-top-fwd")
    });
    h1Element.style.fontSize = "148px";
    h1Element.innerHTML = event.keyCode;
  })