import { DataLayer, Mesh, Renderer } from "@graphenks/s-engine"
import { ObjLoader } from "@graphenks/loaders"

export class SoftwareRenderer implements Renderer {
    #context!: CanvasRenderingContext2D | null

    #meshes: Mesh[] //placeholder

    constructor() {}

    public async init(canvas: HTMLCanvasElement) {
        this.#context = canvas.getContext('2d')

        this.#meshes = await ObjLoader.loadFromUrl()

        return !!this.#context
    }

    public render(dt: number, data: DataLayer) {
        console.log(this.#meshes)
    }
}
