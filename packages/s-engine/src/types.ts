import { Vector3, Vector4 } from '@graphenks/g-mate'
import { DataLayer } from './systems/DataLayerSystem'

export type Vertex = Vector4
export type UV = Vector3
export type Normal = Vector3
export type guid = string

export type Renderer = {
    init: (canvas: HTMLCanvasElement) => Promise<boolean>
    render: (dt: number, data: DataLayer) => void
}
