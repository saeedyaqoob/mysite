function myFunction() {
  var dots1 = document.getElementById("dots1");
  var moreText1 = document.getElementById("more1");
  var btnText1 = document.getElementById("myBtn1");
  
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");

  if (dots1.style.display === "none") {
    dots1.style.display = "inline";
    btnText1.innerText = "Read more";
    moreText1.style.display = "none";
  } else {
    dots1.style.display = "none";
    btnText1.innerText = "Read less";
    moreText1.style.display = "inline";
  }

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
