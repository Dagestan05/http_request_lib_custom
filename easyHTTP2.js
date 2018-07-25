


class EasyHTTP {
  //make an HTTP GET Request
  get(url){
    return new Promise((resolve, reject)=>{
      fetch(url)
      .then(res => res.json())
      .then(data=> resolve(data))
      .catch(err => reject(err))
      })
  }
  //Make HTTP POST Request
  post(url, postData){
    return new Promise((resolve, reject)=>{
      fetch(url, {
        method: "POST",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then(data=> resolve(data))
      .catch(err => reject(err))
      })
  }
  //PUT Request
  put(url, postData){
    return new Promise((resolve, reject)=>{
      fetch(url, {
        method: "PUT",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      .then(res => res.json())
      .then(data=> resolve(data))
      .catch(err => reject(err))
      })
  }
  // DELETE Request
  delete(url){
    return new Promise((resolve, reject)=>{
      fetch(url, {
        method: "DELETE",
        headers:{
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(()=> resolve('successfully deleted'))
      .catch(err => reject(err))
      })
  }
}