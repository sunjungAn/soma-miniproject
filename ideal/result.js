temp = location.href.split("?");
data = temp[1];
const first = document.getElementById('first');
first.textContent = decodeURI(data);