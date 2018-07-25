


class EasyHTTP {
  //make an HTTP GET Request
  async get(url){
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }
  //Make HTTP POST Request
  async post(url, postData){
      const response = await fetch(url, {
        method: "POST",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      const responseData = await response.json();
      return responseData; 
  }
  //PUT Request
  async put(url, postData){
    const response = await fetch(url, {
        method: "PUT",
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      const responseData = await response.json();
      return responseData;
  }
  // DELETE Request
  async delete(url){
    const response = await fetch(url, {
        method: "DELETE",
        headers:{
          'Content-type': 'application/json'
        }
      })
      const responseData = await 'Resource Deleted Successfully';
      return responseData;
  }
}