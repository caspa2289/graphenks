import { guid, Normal, UV, Vertex } from '../types'

export type Mesh = {
    vertexes: Vertex[]
    uvs: UV[]
    normals: Normal[]
    textureId: guid
}
