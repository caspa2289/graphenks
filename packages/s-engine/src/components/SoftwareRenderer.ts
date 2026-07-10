import { DataLayer } from '../systems/DataLayerSystem'
import { Renderer } from '../types'

export class SoftwareRenderer implements Renderer {
    #context!: CanvasRenderingContext2D | null

    constructor() {}

    public async init(canvas: HTMLCanvasElement) {
        this.#context = canvas.getContext('2d')

        return !!this.#context
    }

    public render(dt: number, data: DataLayer) {}
}
