//
// params: page
// ready paginate to render
// no total rows can't hide the next or prev button
//
function Paginate (page) {
    var prevsearchstr = window.location.search.split('&page')[0] + '&page=' + (page - 1)
    var nextsearchstr = window.location.search.split('&page')[0] + '&page=' + (page + 1)
    var pagination =
        '<nav id="paginate-container">'
        +'  <ul class="pagination">'
        +'    <li class="page-item"><a class="page-link" href="' + prevsearchstr + '">Previous</a></li>'
        +'    <li class="page-item"><a class="page-link" href="' + nextsearchstr + '">Next</a></li>'
        +'  </ul>'
        +'</nav>'
  
    document.getElementById("main-view").innerHTML += pagination
}