function makeGetRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/articles', true);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
      const response = JSON.parse(this.responseText);
      document.getElementById('result').innerHTML = JSON.stringify(
        response,
        null,
        2,
      );
    } else {
      console.error('GET request failed:', this.statusText);
    }
  };
  xhr.onerror = function () {
    console.error('GET request failed to reach the server.');
  };
  xhr.send();
}

function makePostRequest() {
  const xhr = new XMLHttpRequest();
  const title = document.getElementById('post-title').value;
  const article = document.getElementById('post-article').value;
  const data = JSON.stringify({ title, article });
  xhr.open('POST', 'http://localhost:3000/articles', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
      const response = JSON.parse(this.responseText);
      document.getElementById('result').innerHTML = JSON.stringify(
        response,
        null,
        2,
      );
    } else {
      console.error('POST request failed:', this.statusText);
    }
  };
  xhr.onerror = function () {
    console.error('POST request failed to reach the server.');
  };
  xhr.send(data);
}

function makePutRequest() {
  const xhr = new XMLHttpRequest();
  const id = document.getElementById('put-id').value;
  const title = document.getElementById('put-title').value;
  const article = document.getElementById('put-article').value;
  const data = JSON.stringify({ title, article });
  xhr.open('PUT', `http://localhost:3000/articles/${id}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
      const response = JSON.parse(this.responseText);
      document.getElementById('result').innerHTML = JSON.stringify(
        response,
        null,
        2,
      );
    } else {
      console.error('PUT request failed:', this.statusText);
    }
  };
  xhr.onerror = function () {
    console.error('PUT request failed to reach the server.');
  };
  xhr.send(data);
}

function makeDeleteRequest() {
  const xhr = new XMLHttpRequest();
  const id = document.getElementById('delete-id').value;
  if (!id) {
    alert('Please enter an ID to delete.');
    return;
  }
  xhr.open('DELETE', `http://localhost:3000/articles/${id}`, true);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 300) {
      document.getElementById('result').innerHTML =
        'Resource deleted successfully';
    } else {
      console.error('DELETE request failed:', this.statusText);
      document.getElementById('result').innerHTML =
        'Failed to delete the resource.';
    }
  };
  xhr.onerror = function () {
    console.error('DELETE request failed to reach the server.');
    document.getElementById('result').innerHTML = 'Failed to reach the server.';
  };
  xhr.send();
}