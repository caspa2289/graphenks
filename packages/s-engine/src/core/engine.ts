import { SoftwareRenderer } from '../components/SoftwareRenderer'
import { DataLayerSystem } from '../systems/DataLayerSystem'
import { Renderer } from '../types'

export class SEngine {
    #data = DataLayerSystem.new()

    #canvas: HTMLCanvasElement

    #renderer!: Renderer

    constructor(canvas: HTMLCanvasElement) {
        this.#canvas = canvas
    }

    public async init() {
        this.#renderer = new SoftwareRenderer()
        const rendererInitStatus = await this.#renderer.init(this.#canvas)

        if (!rendererInitStatus) {
            throw new Error('Failed to initialize canvas context')
        }

        requestAnimationFrame(this.#renderFrame)
    }

    #renderFrame() {
        this.#renderer.render(1000 / 60, this.#data)
        requestAnimationFrame(this.#renderFrame)
    }

    get canvas() {
        return this.#canvas
    }
}
