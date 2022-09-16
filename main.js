"use strict";

// Selcting
const html = document.querySelector("html");
const body = document.querySelector("body");
const heading = document.querySelector(".title");
const main = document.querySelector(".main");
const category = document.querySelectorAll(".category");
const foodItem = document.querySelectorAll(".food-item");
const foodCategory = document.querySelectorAll(".food-category");
const allergyWarning = document.querySelector(".allergy-warning");
const warning = document.getElementById("warning");
const allergieContainer = document.querySelector(".allergies");
const allergyInfo = document.querySelectorAll(".allergy-info");
const allergyInfoEven = document.querySelectorAll(
  ".allergy-info:nth-child(even)"
);
const footer = document.querySelector(".footer");
const footerDesc = document.querySelectorAll(".food-desc");

// Changing the style

html.style.fontSize = "62.5%";

// body
body.style.fontFamily = "Satisfy";
body.style.fontSize = "1.6rem";
body.style.width = "60%";
body.style.margin = "auto";

//heading
heading.style.textAlign = "center";
heading.style.fontSize = "6rem";

//main
main.style.display = "flex";
main.style.justifyContent = "space-between";
main.style.gap = "3rem";

//category
category.forEach((el) => {
  el.style.fontSize = "4rem";
  el.style.borderBottom = "1px solid";
  el.style.display = "block";
  el.style.marginBottom = "3rem";
});

//food item
foodItem.forEach((el) => {
  el.style.fontSize = "2.8rem";
  el.style.marginBottom = "1.8rem";
});
// allery warning section
allergyWarning.style.marginBottom = "10rem";

// warning
warning.style.fontSize = "4rem";
warning.style.textAlign = "center";

//allergy container

allergieContainer.style.fontSize = "2.8rem";
allergieContainer.style.display = "grid";
allergieContainer.style.placeItems = "center";

// allergy info
allergyInfo.forEach((el) => {
  el.style.marginBottom = "4rem";
  el.style.width = "50%";
});

//allergy info even
allergyInfoEven.forEach((el) => {
  el.style.backgroundColor = "cyan";
  el.style.marginBottom = "2rem";
});
// footer
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.gap = "5rem";
footer.style.marginBottom = "15rem";

// footer description
footerDesc.forEach((el) => {
  el.style.display = "grid";
  el.style.placeItems = "center";
  el.style.fontSize = "3rem";
  el.style.borderRadius = "50%";
  el.style.width = "20rem";
  el.style.height = "20rem";
  el.style.border = "10px solid blue";
});

// color generator

const colorGenerator = () => {
  const r1 = Math.ceil(Math.random() * 255);
  const r2 = Math.ceil(Math.random() * 255);
  const r3 = Math.ceil(Math.random() * 255);
  const r4 = Math.random().toFixed(1);

  return `rgba(${r1}, ${r2}, ${r3}, ${r4})`;
};

foodCategory.forEach((el) => {
  el.style.backgroundColor = colorGenerator();
  el.style.padding = "7rem";
});
// media query

const mediaQuery = window.matchMedia("(max-width: 1000px)");
console.log(mediaQuery);

function callback(bp) {
  if (bp.matches) {
    main.style.flexDirection = "column";
    main.style.alignItems = "center";
    footer.style.flexDirection = "column";
  } else {
    main.style.flexDirection = "row";
    footer.style.flexDirection = "row";
  }
}

mediaQuery.addListener(callback);
callback(mediaQuery);
