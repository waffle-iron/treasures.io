import { WorldMap } from './world_map'

export class Renderer {
  constructor(element, verticalSiblings) {
    this.element = element
    this.verticalSiblings = verticalSiblings

    // Create the renderer
    this.renderer = PIXI.autoDetectRenderer(this.element.offsetWidth, this.mapfillHeight())

    // Add the canvas to the HTML document
    this.element.appendChild(this.renderer.view)
    this.renderer.backgroundColor = 0x2980b9

    // Add the world map
    this.stage = new WorldMap()

    this.renderer.autoResize = true

    window.addEventListener('resize', this.resize.bind(this))
    requestAnimationFrame(this.update.bind(this))

    this
  }

  resize() {
    this.renderer.resize(this.element.offsetWidth, this.mapfillHeight())
  }

  update() {
    this.stage.update()
    this.renderer.render(this.stage)

    requestAnimationFrame(this.update.bind(this))
  }

  mapfillHeight() {
    let siblingHeight = this.verticalSiblings.reduce(
      (height, element) => {
        return height + element.offsetHeight
      }, 0)
    return window.innerHeight - (siblingHeight || 0)
  }

}
