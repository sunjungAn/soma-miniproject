// const one = document.getElementsByClassName("one");
// const two = document.getElementsByClassName("two");
// const three = document.getElementsByClassName("three");
// const four = document.getElementsByClassName("four");
// const five = document.getElementsByClassName("five");
// const six = document.getElementsByClassName("six");
// const seven = document.getElementsByClassName("seven");

const url = encodeURI(location.href);
temp = location.href.split("?");
data = decodeURI(temp[1]);

fetch("http://dnatuna.fun/api/ideal/company", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify({ name: data }),
})
  .then((v) => v.json())
  .then((v) => {
    console.log(v);
    const tbody = document.querySelector("tbody");
    for (let i = 0; i < 7; ++i) {
      tbody.innerHTML += `
        <tr class="one">
            <td>${i + 1}</td>
            <td>${v[i].name}</td>
            <td>
                <div class="progress">
                    <progress max="100" value="${v[i].ratio}">
                </div>
            </td>
            <td>${v[i].count}</td>
        </tr>
        `;
    }
    // tbody.innerHTML = v
    //   .map(
    //     (data) => `
    // <tr class="one">
    //                         <td>${data.rank}</td>
    //                         <td>${data.name}</td>
    //                         <td>
    //                             <div class="progress">
    //                                 <progress max="100" value="${data.percent}">
    //                             </div>
    //                         </td>
    //                         <td>${data.length}</td>
    //                     </tr>
    // `
    //   )
    //   .join("");
  })
  .catch((e) => console.log(e));

// const one_name = one.querySelector(".one: nth-child(2)");
// const one_progress = one.querySelector(".one progress");
// one_progress[value] = json;

// const two_name = two.querySelector(".two: nth-child(2)");
// const two_progress = two.querySelector(".two progress");

// const three_name = three.querySelector(".three: nth-child(2)");
// const three_progress = three.querySelector(".three progress");

// const four_name = four.querySelector(".four: nth-child(2)");
// const four_progress = four.querySelector(".four progress");

// const five_name = five.querySelector(".five: nth-child(2)");
// const five_progress = five.querySelector(".five progress");

// const six_name = six.querySelector(".six: nth-child(2)");
// const six_progress = six.querySelector(".six progress");

// const seven_name = seven.querySelector(".seven: nth-child(2)");
// const seven_progress = seven.querySelector(".seven progress");
