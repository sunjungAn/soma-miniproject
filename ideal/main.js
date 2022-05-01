
const candis = [
  "Naver",
  "Kakao",
  "Line",
  "Coupang",
  "우아한 형제들",
  "당근 마켓",
  "TOSS",
  "삼성전자",
  "구글 코리아",
  "퀄컴 코리아",
  "SAP LABS KOREA",
  "SSG.com",
  "롯데쇼핑 E-commerce",
  "11번가",
  "위메프",
  "티몬",
  "직방",
  "야놀자",
  "크래프톤",
  "NEXON",
  "Netmarble",
  "NHN",
  "NC SOFT",
  "Smilegate",
  "농협 은행",
  "신한 은행",
  "국민 은행",
  "SKT",
  "KT",
  "EST SOFT",
  "한화 에어로 스페이스",
  "Ahn Lab"
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//let sorted_candis = shuffle(candis);
//let new_candis = [];

//console.log(sorted_candis);
//console.log(sorted_candis);

// function show() {
//   for (i = 0; i < 32; i++) {
//     new_candis.append();
//   }
// }

const first = document.getElementById('first');
const second = document.getElementById('second');

// first_place = document.querySelector("#first");
// second_place = document.querySelector("#second");

let element1 ="";
let element2 ="";

function show(num){
  if(num == 1){
    candis.push(element1);
  }
  else if(num == 2){
    candis.push(element2);
  }
  
  if(candis.length==16){
    alert('16강!!! 진출!!!');
  }
  else if(candis.length == 8){
    alert('8강!!! 진출!!!');
  }
  else if(candis.length == 4){
    alert('준결승!!! 진출!!!');
  }
  else if(candis.length == 2){
    alert('결승!!! 진출!!!');
  }

  first.textContent = candis[0];
  if(candis.length == 1){
    alert(candis[0]);
    next_string = 'result.html?'
    next_string.concate(candis[0]);
    const url = encodeURI(next_string);
    console.log(url);
    location.href=url;
  }
  else{
    second.textContent = candis[1];
  }
  element1 = candis[0];
  element2 = candis[1];
  candis.shift();
  candis.shift();
  console.log(candis)
}

show();

