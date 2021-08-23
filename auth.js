const logout = document.getElementById("logout");

logout.addEventListener("click", function () {
  localStorage.removeItem("user");
  alert("logout berhasil");
  window.location = "./";
});
