var Nom = "";
var Mail = "";
var Tel = "";
var Adresse = "";
var Ville = "";
var Cp = "";
var Pays = "";
var Num = "";
var M = "";
var Y = "";
var Cvv = "";
let checkoutControl = false;

chrome.storage.local.get("autofillChecked", function (data) {
  let autofillCheck = data.autofillChecked;
  if (autofillCheck == true) {
    getData();
    setTimeout(autofill, 0.5);
  }
});
chrome.storage.local.get("checkoutChecked", function (data) {
  let checkoutCheck = data.checkoutChecked;
  if (checkoutCheck == true) {
    if (!checkoutControl) setTimeout(checkout, 50);
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
  chrome.storage.local.get("Pays", function (data) {
    Pays = data.Pays;
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
  document.getElementById("order_billing_name").value = Nom;
  document.getElementById("order_email").value = Mail;
  document.getElementById("order_tel").value = Tel;
  document.getElementById("order_billing_address").value = Adresse;
  document.getElementById("order_billing_city").value = Ville;
  document.getElementById("order_billing_zip").value = Cp;
  document.getElementById("order_billing_country").value = Pays;
  document.getElementById("credit_card_number").value = Num;
  document.getElementById("credit_card_month").value = M;
  document.getElementById("credit_card_year").value = Y;
  document.getElementById("credit_card_verification_value").value = Cvv;
}

function checkout() {
  document.getElementById("order_terms").checked = true;
  document.getElementById("checkout_form").submit();
  checkoutControl = true;
}
