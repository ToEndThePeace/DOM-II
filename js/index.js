// Your code goes here
/**
 * get() is used to return a node from your HTML
 * @param {string} selector 
 * @returns HTML node
 */
function get(selector) {
  return document.querySelector(selector);
}
/**
 * getAll() pulls array of nodes from selector query
 * @param {String} selector 
 * @returns array of HTML nodes
 */
function getAll(selector) {
  return document.querySelectorAll(selector);
}



const button1 = getAll(".content-pick .btn")[0];
function scrollToTop(event) {
  window.scrollTo(0, 0)
}
button1.addEventListener("click", scrollToTop);
const section1 = getAll(".content-pick .destination")[3];
button1.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log(event.currentTarget);
})
section1.addEventListener("click", (event) => {
  console.log(event.currentTarget);
})

const field1 = getAll("textarea")[0];
field1.addEventListener("select", () => {
  field1.style["background-color"] = "red";
})

const field2 = getAll("textarea")[1];
field2.addEventListener("focus", () => {
  field2.style["text-align"] = "center";
});

const field3 = getAll("textarea")[2];
field3.addEventListener("scroll", () => {
  field3.style.color = "red";
})

const button2 = getAll(".destination .btn")[1];
button2.addEventListener("mouseover", () => {
  button2.style.border = "2px solid black";
})

const button3 = getAll(".destination .btn")[2];
button3.addEventListener("dblclick", () => {
  button3.classList.remove("btn");
})

window.addEventListener("load", (event) => {
  alert(JSON.stringify(event));
})

window.addEventListener("resize", () => {
  alert("Window size changed!");
})

window.addEventListener("wheel", () => {
  get("body").style.background = "#AAA";
})

window.addEventListener("keydown", (event) => {
  alert(`${event.key} pressed!`);
})

const img1 = get(".content-destination img");
img1.addEventListener("drag", () => {
  img1.style["border-radius"] = "50px";
  img1.style["box-shadow"]    = "0 0 15px #000";
})
img1.addEventListener("dragend", (event) => {
  img1.style["border-radius"] = "10px";
  img1.style["box-shadow"]    = "0 0 0 #CCC";
})
getAll("nav a").forEach(x => {
  x.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Default click behavior prevented.");
  })
})