import { SoftwareRenderer } from '@graphenks/softy-renderer'
import { DataLayerSystem } from '../systems/DataLayerSystem'
import { Renderer } from '../types'

export class SEngine {
    #data = DataLayerSystem.new()

    #canvas: HTMLCanvasElement

    #renderer!: Renderer

    constructor(canvas: HTMLCanvasElement) {
        this.#canvas = canvas
        this._renderFrame = this._renderFrame.bind(this)
    }

    public async init() {
        this.#renderer = new SoftwareRenderer()
        const rendererInitStatus = await this.#renderer.init(this.#canvas)

        if (!rendererInitStatus) {
            throw new Error('Failed to initialize canvas context')
        }

        requestAnimationFrame(this._renderFrame)
    }

    private _renderFrame() {
        this.#renderer.render(1000 / 60, this.#data)
        // requestAnimationFrame(this._renderFrame)
    }

    get canvas() {
        return this.#canvas
    }
}
