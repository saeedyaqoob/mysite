function myFunction1() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerText = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerText = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerText = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerText = "Read less";
    moreText.style.display = "inline";
  }
}
