window.onload = function () {
  chrome.storage.local.get("checked", function (data) {
    let check = data.checked;
    if (check == true) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
};

window.onchange = function () {
  let checkbox = document.getElementById("checkbox");

  if (checkbox.checked == true) {
    chrome.storage.local.set({ checked: true });
  } else {
    chrome.storage.local.set({ checked: false });
  }
};
