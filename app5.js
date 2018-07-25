const API_URL = 'https://jsonplaceholder.typicode.com/posts'
const http = new easyHTTP;

// GET POSTS
/* http.get(API_URL, function(err, res){ // need to pass 1st par as err, we specified in method
  if (err) {
    console.log(err)
  } else {
    console.log(res)
  }
}) */

// POST a post
const dummyData = {
  title: 'Brand new Post',
  body: 'This is a new post '
}
/* http.post(API_URL, dummyData, function(err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
    }
} ) */

//PUT
/* http.put(`${API_URL}/23`, dummyData, function(err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
    }
} ) */

//DELETe
http.delete(`${API_URL}/23`, function(err, res) {
  if (err) {
    console.log(err)
  } else {
    console.log(res)
    }
} )