import PIXI from 'pixi.js'
import { WorldMap } from './world_map.js'

let nav = document.getElementById("nav")
let footer = document.getElementById("footer")
let map = document.getElementById("map")

let worldMap = new WorldMap(map, [nav, footer])
