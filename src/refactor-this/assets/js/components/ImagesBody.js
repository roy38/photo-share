//
// params: event [dataset]
// download image via blob
//
async function downloadImage (e) {
    // console.log(e.target.dataset.name)
    // console.log(e.target.dataset.src)

    let src = e.target.dataset.src
    let name = e.target.dataset.name

    const response = await fetch(src)
    const blobImage = await response.blob()
    const href = URL.createObjectURL(blobImage)
    const anchorElement = document.createElement('a')

    anchorElement.href = href
    anchorElement.download = name
  
    document.body.appendChild(anchorElement)
    anchorElement.click()
  
    document.body.removeChild(anchorElement)
    window.URL.revokeObjectURL(href)
}

//
// params: category, page
// fetch and ready images to render
//
function ImagesBody (category, page) {
    document.getElementById("main-view").innerHTML +=
        '<div class="container">'
        +'  <div id="all-images" class="row row-cols-3"><p id="no-images-yet">Please wait, Images are being rendered.</p></div>'
        +'</div>'

    let l = 3;
    for (var k = 0; k < 3; k++) {
        l--;
        fetchImages(category, (page * 3) - l)
            .then(function (images) {

                let noImageYet = document.getElementById("no-images-yet")
                let paginate = document.getElementById("paginate-container")

                if (noImageYet) noImageYet.style.display = 'none'
                if (!paginate.style.display) paginate.style.display = 'block'
                
                for (var i = 0; i < images.length; i++) {
                    document.getElementById("all-images").innerHTML +=
                    '<div class="col" style="height: 400px; padding: 10px;">'
                    +'  <img class="image" src="' + images[i].url + '" alt="' + images[i].name + '" style="height: 100%; object-fit: cover; width: 100%;" lazy/>'
                    +'  <div class="middle">'
                    +'    <a class="btn btn-dark" onclick="downloadImage(event)" data-src="'+images[i].url+'" data-name="'+images[i].name+'">DOWNLOAD</a>'
                    +'  </div>'
                    +'</div>'
                }
        })
    }
}