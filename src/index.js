// GET Request
function makeGetRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        const response = JSON.parse(this.responseText);
        document.getElementById('result').innerHTML = JSON.stringify(response, null, 2);
      } else {
        console.error('GET request failed:', this.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('GET request failed to reach the server.');
    };
    xhr.send();
  }
  
  // POST Request
  function makePostRequest() {
    const xhr = new XMLHttpRequest();
    const data = JSON.stringify({ data: document.getElementById('post').value });
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        const response = JSON.parse(this.responseText);
        document.getElementById('result').innerHTML = JSON.stringify(response, null, 2);
      } else {
        console.error('POST request failed:', this.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('POST request failed to reach the server.');
    };
    xhr.send(data);
  }
  
  // PUT Request
  function makePutRequest() {
    const xhr = new XMLHttpRequest();
    const data = JSON.stringify({ data: document.getElementById('put').value });
    xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        const response = JSON.parse(this.responseText);
        document.getElementById('result').innerHTML = JSON.stringify(response, null, 2);
      } else {
        console.error('PUT request failed:', this.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('PUT request failed to reach the server.');
    };
    xhr.send(data);
  }
  
  // DELETE Request
  function makeDeleteRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', true);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        document.getElementById('result').innerHTML = 'Resource deleted successfully';
      } else {
        console.error('DELETE request failed:', this.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('DELETE request failed to reach the server.');
    };
    xhr.send();
  }  
