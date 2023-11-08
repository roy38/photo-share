//
// set base url
// set headers
//
const BASE_URL = 'http://localhost:8888/images'
const myApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

//
// method: GET
// params: category, page
// get all images
//
fetchImages = async (category, page) => {
  const response = await myApi.get(`?category=${category}&page=${page}`)
  return response.data
}