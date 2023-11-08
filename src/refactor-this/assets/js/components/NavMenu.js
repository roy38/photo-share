//
// params: category
// ready nav menu to render
//
function NavMenu (category) {
    var nav =
        '<nav class="navbar navbar-expand-lg navbar-light bg-light">'
        +'  <a class="navbar-brand" href="/">Photo Sharing App</a>'
        +'  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">'
        +'    <span class="navbar-toggler-icon"></span>'
        +'  </button>'
        +'  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">'
        +'    <div class="navbar-nav">'
        +'      <a class="nav-link ' + (category == 'nature' ? 'active' : '') + '" href="?category=nature">Nature <span class="sr-only">(current)</span></a>'
        +'      <a class="nav-link ' + (category == 'architecture' ? 'active' : '') + '" href="?category=architecture">Architecture</a>'
        +'      <a class="nav-link ' + (category == 'fashion' ? 'active' : '') + '" href="?category=fashion">Fashion</a>'
        +'    </div>'
        +'  </div>'
        +'</nav>'

    document.getElementById("main-view").innerHTML = nav
}