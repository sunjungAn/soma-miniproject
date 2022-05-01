temp = location.href.split("?");
data = temp[1];

fetch("http://dnatuna.fun/api/ideal/language", {
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
})
.catch((e) => console.log(e));