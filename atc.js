chrome.storage.local.get("atcChecked", function (data) {
  let atcCheck = data.atcChecked;
  if (atcCheck == true) {
    atc();
  }
});

function atc() {}
