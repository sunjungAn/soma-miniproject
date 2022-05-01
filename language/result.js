temp = location.href.split("?");
data = temp[1];
const first = document.getElementById('first');
first.textContent = decodeURI(data);

function tmp(){
    loc = 'chart.html?'+temp[1];
    location.href = loc;
}