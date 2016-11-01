export class WorldMap {
  constructor(element, verticalSiblings) {
    this.element = element
    this.verticalSiblings = verticalSiblings

    // Create the renderer
    this.renderer = PIXI.autoDetectRenderer(this.element.offsetWidth, this.mapfillHeight())

    // Add the canvas to the HTML document
    this.element.appendChild(this.renderer.view)

    this.stage = new PIXI.Container()
    this.renderer.render(this.stage)
    let resize = () => {
      this.renderer.resize(this.element.offsetWidth, this.mapfillHeight())
    }
    window.addEventListener('resize', resize)
  }

  mapfillHeight() {
    let siblingHeight = this.verticalSiblings.reduce(
      (height, element) => {
        return height + element.offsetHeight
      }, 0)
    return window.innerHeight - (siblingHeight || 0)
  }
}
