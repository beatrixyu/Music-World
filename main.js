// When the user scrolls down 50px from the top of the document, resize the header's font size
let servicePart = true;
let aboutPart = true;
//let arrFigure = document.getElementsByClassName("serviceImg")[0].children;
let arrAbout = document.querySelector("#about article").children;

//task 1
window.onscroll = scrollFunction;
window.onload = mainContent;
function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("titleWord").style.paddingRight = "900px";

    console.log("header");
  } else {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("titleWord").style.paddingRight = "0px";
  }
}

//task 2
function mainContent() {
  document.getElementById("title").style.left = "-600px";
  document.getElementById("titleText").style.left = "-700px";

  setTimeout(function() {
    document.getElementById("title").style.left = "0";
  }, 1000);
  setTimeout(function() {
    document.getElementById("titleText").style.left = "0";
  }, 2000);
}

// function serviceImgVisibility() {
//   let services = document.getElementById("service").getBoundingClientRect().top;
//   if (services < window.innerHeight / 2 && servicePart) {
//     servicePart = false;
//     let timer = 500;
//     for (let i = 0; i < arrFigure.length; i++) {
//       setTimeout(function() {
//         arrFigure[i].style.left = "0";
//         arrFigure[i].style.visibility = "visible";
//       }, timer);
//       timer += 200;
//     }
//   }
// }
//task 3
const figure = document.querySelectorAll("figure");
console.log(figure);
console.log("figure", figure[0].offsetTop);
for (let i = 0; i < figure.length; i++) {
  document.addEventListener("scroll", function() {
    console.log(document.documentElement.scrollTop);
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      figure[i].classList.remove("show");
      figure[i].style.transition = i + "s";
    } else {
      figure[i].classList.add("show");
      figure[i].style.transition = i + "s";
    }
    // text.classList.remove("hidden");
  });
}

//task 4
var text = document.querySelector("#text");
document.addEventListener("scroll", function() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    text.classList.remove("show");
    text.style.transition = "1s";
  } else {
    text.classList.add("show");
    text.style.transition = "1s";
  }
  // text.classList.remove("hidden");
  console.log(document.documentElement.scrollTop);
});

//task5
var arrow = document.querySelector(".arrowUp");
document.addEventListener("scroll", function() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    arrow.classList.remove("show");
    arrow.style.transition = "0.5s";
  } else {
    arrow.classList.add("show");
    arrow.style.transition = "0.5s";
  }
});
