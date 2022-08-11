$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  rtl: true,
  lazyLoad: true,
  center:true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

// let coll = document.querySelector(".coll-show");

// let plus = document.querySelector(".plus-col");

// let toggle = document.getElementById("#toggle");

// toggle.addEventListener("click", function () {
//   this.classList.add('jksjksjdks');
// });

let openCollapses = document.querySelectorAll(".open-collaps");
// openCollapses.forEach((ele) => {
//   ele.addEventListener("click", function (e) {
//     openCollapses.forEach((ele) => {
//       ele.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//   });
// });

for (let i = 0; i < openCollapses.length; i++) {
  console.log(openCollapses[i]);

  openCollapses[i].addEventListener("click", function () {
    this.firstElementChild.classList.add("fa-plus");

    this.firstElementChild.classList.toggle("fa-minus");
  });
}
// for (let i = 0; i < openCollapses.length; i++) {
//   console.log(openCollapses[i]);

//   openCollapses[i].addEventListener("click", function () {

//     if (this.firstElementChild.classList.contains("fa-plus")) {
//       this.firstElementChild.classList.replace('fa-plus' , 'fa-minus');
//     } else if(this.firstElementChild.classList.contains("fa-minus")){
//       this.firstElementChild.classList.replace('fa-minus' , 'fa-plus');
//     }
//   });
// }

// openCollapses.forEach((ele) => {
//   ele.addEventListener("click", function (e) {
//     ele.classList.remove("active");

//     this.classList.add("active");
//   });
// });

let bars = document.querySelector(".bars");
let ulh = document.querySelector(".hide-ul");

bars.addEventListener("click", function () {
  this.classList.toggle("bar-tog")
  ulh.classList.toggle("tog-ul");
});

let navBackground = document.querySelector(".navbar2");

window.onscroll = function () {
  if (window.pageYOffset > 30) {
    navBackground.classList.add("s-backg");
  } else {
    navBackground.classList.remove("s-backg");
  }
};

let dropDown = document.querySelector(".drop-down");

let arrowDrop = document.querySelector(".drop-rel");

let dropContent = document.querySelectorAll(".drop-down-content");

arrowDrop.addEventListener("click", function () {
  dropDown.classList.toggle("show-drop");
});

for (let i = 0; i < dropContent.length; i++) {
  dropContent[i].addEventListener("click", function (e) {
    e.stopPropagation();
  });
}


let confing = {
  disableMobile: true
}

flatpickr("input[type=datetime-local]", {});
