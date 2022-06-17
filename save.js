chrome.storage.local.get("Nom", function (data) {
  let Nom = data.Nom;
  document.getElementById("nom").value = Nom;
});
chrome.storage.local.get("Mail", function (data) {
  let Mail = data.Mail;
  document.getElementById("mail").value = Mail;
});
chrome.storage.local.get("Tel", function (data) {
  let Tel = data.Tel;
  document.getElementById("tel").value = Tel;
});
chrome.storage.local.get("Adresse", function (data) {
  let Adresse = data.Adresse;
  document.getElementById("adresse").value = Adresse;
});
chrome.storage.local.get("Ville", function (data) {
  let Ville = data.Ville;
  document.getElementById("ville").value = Ville;
});
chrome.storage.local.get("Cp", function (data) {
  let Cp = data.Cp;
  document.getElementById("cp").value = Cp;
});
chrome.storage.local.get("Num", function (data) {
  let Num = data.Num;
  document.getElementById("num").value = Num;
});
chrome.storage.local.get("M", function (data) {
  let M = data.M;
  document.getElementById("m").value = M;
});
chrome.storage.local.get("Y", function (data) {
  let Y = data.Y;
  document.getElementById("y").value = Y;
});
chrome.storage.local.get("Cvv", function (data) {
  let Cvv = data.Cvv;
  document.getElementById("cvv").value = Cvv;
});

document.getElementById("submit").addEventListener("click", function () {
  saveData();
});

function saveData() {
  let nom = document.getElementById("nom").value;
  let mail = document.getElementById("mail").value;
  let tel = document.getElementById("tel").value;
  let adresse = document.getElementById("adresse").value;
  let ville = document.getElementById("ville").value;
  let cp = document.getElementById("cp").value;
  let num = document.getElementById("num").value;
  let m = document.getElementById("m").value;
  let y = document.getElementById("y").value;
  let cvv = document.getElementById("cvv").value;

  chrome.storage.local.set({ Nom: nom });
  chrome.storage.local.set({ Mail: mail });
  chrome.storage.local.set({ Tel: tel });
  chrome.storage.local.set({ Adresse: adresse });
  chrome.storage.local.set({ Ville: ville });
  chrome.storage.local.set({ Cp: cp });
  chrome.storage.local.set({ Num: num });
  chrome.storage.local.set({ M: m });
  chrome.storage.local.set({ Y: y });
  chrome.storage.local.set({ Cvv: cvv });
}
