// const one = document.getElementsByClassName("one");
// const two = document.getElementsByClassName("two");
// const three = document.getElementsByClassName("three");
// const four = document.getElementsByClassName("four");
// const five = document.getElementsByClassName("five");
// const six = document.getElementsByClassName("six");
// const seven = document.getElementsByClassName("seven");

const json = JSON.parse("주시는 json");
const tbody = document.querySelector("tbody");
tbody.innerHTML = json
  .map(
    (v) => `
<tr class="one">
                        <td>${v.rank}</td>
                        <td>${v.name}</td>
                        <td>
                            <div class="progress">
                                <progress max="100" value="${v.percent}">
                            </div>
                        </td>
                        <td>${v.length}</td>
                    </tr>
`
  )
  .join("");

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
