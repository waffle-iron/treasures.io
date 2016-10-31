import PIXI from 'pixi.js';

let nav = document.getElementById("nav")
let footer = document.getElementById("footer")
let map = document.getElementById("map")

let mapHeight = function () {
  return (window.innerHeight- nav.offsetHeight) - footer.offsetHeight
}

var renderer = PIXI.autoDetectRenderer(map.offsetWidth, mapHeight());

let resizeMap = function () {
  renderer.resize(map.offsetWidth, mapHeight())
}

window.addEventListener('resize', resizeMap);

//Create the renderer

renderer.autoResize = true;

//Add the canvas to the HTML document
map.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);
