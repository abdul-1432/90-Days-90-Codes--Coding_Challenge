const articles = [...document.querySelectorAll('.articles article')];  

function getSelectedArticle() {
  const selectedArticle = articles.find(article => article.hasAttribute('aria-selected'))
  selectedArticle.removeAttribute('aria-selected')
  return selectedArticle
}

function prevArticle() {
  const selectedArticle = getSelectedArticle()
  const nextArticle = (articles[articles.findIndex(article => selectedArticle == article) - 1] || articles[articles.length - 1])
  nextArticle.setAttribute('aria-selected', 'true')
}
  
function nextArticle() {
  const selectedArticle = getSelectedArticle()
  const nextArticle = (articles[articles.findIndex(article => selectedArticle == article) + 1] || articles[0])
  nextArticle.setAttribute('aria-selected', 'true')
}