var xhr = new XMLHttpRequest();
xhr.open('GET','http://localhost:3000/data',true);

xhr.onload = (e) => {
   console.log(JSON.parse(xhr.response));
}

xhr.send();
