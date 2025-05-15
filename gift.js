
// Sembunyikan semua halaman kecuali halaman1 saat awal
document.getElementById("halaman2").style.display = "none"; //nangkep nilai halaman
document.getElementById("halaman3").style.display = "none";
document.getElementById("halaman4").style.display = "none";
document.getElementById("halaman5").style.display = "none";

// tombol "yes!" -> halaman2
document.querySelector(".yes").addEventListener("click", function () {
  document.getElementById("halaman1").style.display = "none";
  document.getElementById("halaman2").style.display = "block";
});
document.querySelector(".no").addEventListener("click", function () {
  const alertBox = document.getElementById("alerts");
  alertBox.classList.remove("hidden");
});

// Fungsi untuk nutup alert
function tutupAlert1() {
  const alertBox = document.getElementById("alerts");
  alertBox.classList.add("hidden");
}
// setelah submit form nama -> halaman3
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // supaya tidak reload
  const nama=document.getElementById("nama").value.trim().toLowerCase();
  const alertBox = document.getElementById("aler");
  const popupSalah=document.getElementById("alir");
  if(nama==="aini" || nama === "nai"){
    alertBox.classList.remove("hidden");
  document.getElementById("halaman2").style.display = "none";
  document.getElementById("halaman3").style.display = "block";
  }
 else{
  popupSalah.classList.remove("hidden");
 }
});
function tutupAler() {
  const alertBox = document.getElementById("aler");
  alertBox.classList.add("hidden");
  const lagu = document.getElementById("lagu");
  lagu.play();
 } 
function tutupAlir(){
  const popupSalah=document.getElementById("alir");
  popupSalah.classList.add("hidden");
}
// tombol "Buka kado" -> halaman4
 document.querySelector("#halaman3 .buka button").addEventListener("click", function () {
  document.getElementById("halaman3").style.display = "none";
  document.getElementById("halaman4").style.display = "block"; 
});

// tombol "next" -> halaman5
document.querySelector("#halaman4 .nx button").addEventListener("click", function () {
  document.getElementById("halaman4").style.display = "none";
  document.getElementById("halaman5").style.display = "block";
});

// tombol "selesai" -> alert atau reset
// Tombol "selesai" → munculin alert
document.querySelector("#halaman5 .sls button").addEventListener("click", function () {
  const alertBox = document.getElementById("alert");
  alertBox.classList.remove("hidden");
});

// Fungsi untuk nutup alert
function tutupAlert() {
  const alertBox = document.getElementById("alert");
  alertBox.classList.add("hidden");
}

