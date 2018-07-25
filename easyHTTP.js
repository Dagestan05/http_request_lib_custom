//create a new object to handle HTTP requests using built in XMLHttpRequest API
function easyHTTP(params) {
  this.http = new XMLHttpRequest();

}
////////////////////////////
// make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true); // true for async

  this.http.onload = function(){
    if (this.http.status === 200) {
      callback(null, this.http.responseText) // first par is for error
    }else{
      callback("Error " + this.http.status)
    }
  }.bind(this) // bound bcs this kw inside func is differnt

  this.http.send()
}
/////////////////////////////
// make an HTTP POST Request
easyHTTP.prototype.post = function (url, data,  callback) {
  this.http.open("POST", url, true); // true for async
  //Set header type
  this.http.setRequestHeader("Content-type", "application/json")

  this.http.onload = function(){
      callback(null, this.http.responseText) // first par is for error
    
  }.bind(this) // bound bcs this kw inside func is differnt

  this.http.send(JSON.stringify(data))
}

/////////////////////////////
// make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data,  callback) {
  this.http.open("PUT", url, true); // true for async
  //Set header type
  this.http.setRequestHeader("Content-type", "application/json")

  this.http.onload = function(){
      callback(null, this.http.responseText) // first par is for error
    
  }.bind(this) // bound bcs this kw inside func is differnt

  this.http.send(JSON.stringify(data))
}

///////////////////////////////
// make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true); // true for async

  this.http.onload = function(){
    if (this.http.status === 200) {
      callback(null, 'Post Deleted') // it will return empty obj, so I wrote a friendly msg
    }else{
      callback("Error " + this.http.status)
    }
  }.bind(this) // bound bcs this kw inside func is differnt

  this.http.send()
}