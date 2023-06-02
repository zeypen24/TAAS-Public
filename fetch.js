
fetch('https://server.com/demo.json')
    .then((response) => response.json())
    .then((json) => console.log(json));