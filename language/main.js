
const candis = [
  "Java",
  "Python",
  "SQL",
  "C",
  "C++",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Go",
  "Rust",
  "C#",
  "Kotlin",
  "Scala",
  "R",
  "ShellScript",
  "엄준식"
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
  
  if(candis.length == 8){
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
    next_string = 'result.html?'
    next_string += candis[0]
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

