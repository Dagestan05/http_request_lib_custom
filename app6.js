const API_URL = 'https://jsonplaceholder.typicode.com/users'

const http = new EasyHTTP();

// GET Users
/*
http.get(API_URL)
    .then(data=> console.log(data))
    .catch(err=> console.log(err))
*/

//User data
const userData = {
  name: 'Alex',
  username: 'alexakha',
  email: 'alex@gmail.com'
}

//POST users
/*
http.post(API_URL, userData)
    .then(data=> console.log(data))
    .catch(err=> console.log(err))
*/

// PUT USers (update a user)
/* 
http.put(`${API_URL}/1`, userData)
    .then(data=> console.log(data))
    .catch(err=> console.log(err))

*/

//DELETE Request

http.delete(`${API_URL}/2`)
    .then(data=> console.log(data))
    .catch(err => console.log(data))
