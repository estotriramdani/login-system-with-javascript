const username = document.getElementById("username");
const pw = document.getElementById("pw");
const btn = document.getElementById("btn");
const validation = document.getElementById("validation");

username.addEventListener("keyup", function (e) {
  event.preventDefault();
  if (e.keyCode === 13) {
    btn.click();
  }
});

pw.addEventListener("keyup", function (e) {
  event.preventDefault();
  if (e.keyCode === 13) {
    btn.click();
  }
});

const listUser = [
  {
    username: "esto",
    password: "qwe123",
  },
  {
    username: "admin",
    password: "qwe123",
  },
];

btn.addEventListener("click", function () {
  let userTryLogin = { username: `${username.value}`, password: `${pw.value}` };
  console.log(userTryLogin);
  fetch("./user.json")
    .then((res) => res.json())
    .then((res) => {
      let userArr = [];
      res.forEach((r) => {
        userArr.push(r);
      });
      console.log(userArr);
      if (userArr.includes(username.value) == true) {
        window.location = "home.html";
        localStorage.setItem("user", username.value);
      } else if (userArr.includes(username.value) == false) {
        validation.innerHTML = `<strong style="color: red;">Username tidak terdaftar</strong>`;
      }
    });

  if (listUser.includes(userTryLogin, 0)) {
    alert("berhasil");
  } else {
    alert("gagal");
  }
});
