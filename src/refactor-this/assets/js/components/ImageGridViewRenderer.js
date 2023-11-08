function ImageGridViewRenderer () {}

//
// render NavMenu component
// render ImagesBody component
// render Paginate component
//
// on page load fetch nature images
// set category & page base on passed params in url
//
ImageGridViewRenderer.prototype.render = function () {

  var urlString = window.location.href
  var url = new URL(urlString)
  var category = 'nature'
  var page = 1

  if (!url.searchParams.get("category")) {
    window.location.href = '?category=nature'
  }

  if (window.location.search.includes('category')) {
    category = url.searchParams.get("category")
  }

  if (window.location.search.includes('page')) {
    page = Number(url.searchParams.get("page"))
  }

  NavMenu(category)
  ImagesBody(category, page)
  Paginate(page)
}