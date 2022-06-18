window.onload = function () {
  chrome.storage.local.get("autofillChecked", function (data) {
    let autofillCheck = data.autofillChecked;
    if (autofillCheck == true) {
      autofill.checked = true;
    } else {
      autofill.checked = false;
    }
  });
  chrome.storage.local.get("atcChecked", function (data) {
    let atcCheck = data.atcChecked;
    if (atcCheck == true) {
      atc.checked = true;
    } else {
      atc.checked = false;
    }
  });
  chrome.storage.local.get("checkoutChecked", function (data) {
    let checkoutCheck = data.checkoutChecked;
    if (checkoutCheck == true) {
      checkout.checked = true;
    } else {
      checkout.checked = false;
    }
  });
};

window.onchange = function () {
  let autofill = document.getElementById("autofill");

  if (autofill.checked == true) {
    chrome.storage.local.set({ autofillChecked: true });
  } else {
    chrome.storage.local.set({ autofillChecked: false });
  }
  let atc = document.getElementById("atc");

  if (atc.checked == true) {
    chrome.storage.local.set({ atcChecked: true });
  } else {
    chrome.storage.local.set({ atcChecked: false });
  }
  let checkout = document.getElementById("checkout");

  if (checkout.checked == true) {
    chrome.storage.local.set({ checkoutChecked: true });
  } else {
    chrome.storage.local.set({ checkoutChecked: false });
  }
};
