var Nom = "";
var Mail = "";
var Tel = "";
var Adresse = "";
var Ville = "";
var Cp = "";
var Num = "";
var M = "";
var Y = "";
var Cvv = "";

chrome.storage.local.get("checked", function (data) {
  let check = data.checked;
  if (check == true) {
    getData();
    setTimeout(autofill, 0.0001);
  }
});

function getData() {
  chrome.storage.local.get("Nom", function (data) {
    Nom = data.Nom;
  });
  chrome.storage.local.get("Mail", function (data) {
    Mail = data.Mail;
  });
  chrome.storage.local.get("Tel", function (data) {
    Tel = data.Tel;
  });
  chrome.storage.local.get("Adresse", function (data) {
    Adresse = data.Adresse;
  });
  chrome.storage.local.get("Ville", function (data) {
    Ville = data.Ville;
  });
  chrome.storage.local.get("Cp", function (data) {
    Cp = data.Cp;
  });
  chrome.storage.local.get("Num", function (data) {
    Num = data.Num;
  });
  chrome.storage.local.get("M", function (data) {
    M = data.M;
  });
  chrome.storage.local.get("Y", function (data) {
    Y = data.Y;
  });
  chrome.storage.local.get("Cvv", function (data) {
    Cvv = data.Cvv;
  });
}

function autofill() {
  document.getElementById("order_billing_address_3").value = Nom;
}
