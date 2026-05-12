import { Mesh } from '../components/Mesh'
import { Texture } from '../components/Texture'
import { Transform } from '../components/Transform'
import { guid } from '../types'

export type DataLayer = {
    entities: guid[]
    meshes: Map<guid, Mesh>
    transforms: Map<guid, Transform>
    textures: Map<guid, Texture>
}

export const DataLayerSystem = {
    new: (): DataLayer => {
        return {
            entities: [],
            meshes: new Map(),
            transforms: new Map(),
            textures: new Map(),
        }
    },
}
