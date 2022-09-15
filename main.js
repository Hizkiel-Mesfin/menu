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
category.forEach((el) => (el.style.fontSize = "4rem"));
category.forEach((el) => (el.style.borderBottom = "1px solid"));
category.forEach((el) => (el.style.display = "block"));
category.forEach((el) => (el.style.marginBottom = "3rem"));

//food item
foodItem.forEach((el) => (el.style.fontSize = "2.8rem"));
foodItem.forEach((el) => (el.style.marginBottom = "1.8rem"));

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
allergyInfo.forEach((el) => (el.style.marginBottom = "4rem"));
allergyInfo.forEach((el) => (el.style.width = "50%"));

//allergy info even
allergyInfoEven.forEach((el) => (el.style.backgroundColor = "cyan"));
allergyInfo.forEach((el) => (el.style.marginBottom = "2rem"));

// footer
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.gap = "5rem";
footer.style.marginBottom = "15rem";

// footer description
footerDesc.forEach((el) => (el.style.display = "grid"));
footerDesc.forEach((el) => (el.style.placeItems = "center"));
footerDesc.forEach((el) => (el.style.fontSize = "3rem"));
footerDesc.forEach((el) => (el.style.borderRadius = "50%"));
footerDesc.forEach((el) => (el.style.width = "20rem"));
footerDesc.forEach((el) => (el.style.height = "20rem"));
footerDesc.forEach((el) => (el.style.border = "10px solid blue"));

// color generator

const colorGenerator = () => {
  const random = Math.floor(Math.random() * 10);
  const arr = [
    "rgb(0,0,128,0.3)",
    "rgb(0,0,255, 0.3)",
    "rgb(0,128,0, 0.3)",
    "rgb(0,255,255, 0.3)",
    "rgb(128,0,128, 0.3)",
    "rgb(128,128,0, 0.3)",
    "rgb(255,0,255, 0.3)",
    "rgb(255,255,0, 0.3)",
    "rgb(0,128,128, 0.3)",
    "rgb(0,255,0, 0.3)",
  ];

  return arr[random];
};

foodCategory.forEach((el) => (el.style.backgroundColor = colorGenerator()));
foodCategory.forEach((el) => (el.style.padding = "7rem"));

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
