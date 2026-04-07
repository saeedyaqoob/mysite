function myFunction1() {
  var dots1 = document.getElementById("dots");
  var moreText1 = document.getElementById("more");
  var btnText1 = document.getElementById("myBtn");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerText = "Read more";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerText = "Read less";
    moreText1.style.display = "inline";
  }
}

function myFunction2() {
  var dots2 = document.getElementById("dots");
  var moreText2 = document.getElementById("more");
  var btnText2 = document.getElementById("myBtn");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerText = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerText = "Read less";
    moreText2.style.display = "inline";
  }
}
