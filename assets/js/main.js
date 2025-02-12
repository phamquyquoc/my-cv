let elnavs = document.querySelectorAll(".tab-link");

elnavs.forEach((elnav) => {
  elnav.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    elnav.classList.add("active");
  });
});


let clickRenderNav = document.getElementById("bars");

clickRenderNav.addEventListener("click", () => {
  let x = document.querySelectorAll(".tab");
  x.forEach((el) => {
    if (el.classList.value.indexOf("nav-item-render") === -1) {
      el.classList.add("nav-item-render");
    } else {
      el.classList.remove("nav-item-render");
    }
  });
});

