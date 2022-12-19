setInterval(function () {
  var skip_btn = document.getElementsByClassName("ytp-ad-skip-button");
  if (skip_btn != undefined && skip_btn.length > 0) {
    console.log("Ad-Detected");
    skip_btn[0].click();
  }
  var skip_btn = document.getElementsByClassName("ytp-ad-overlay-close-button");
  if (skip_btn != undefined && skip_btn.length > 0) {
    console.log("ad - detected");
    skip_btn[0].click();
  }
}, 3000);
