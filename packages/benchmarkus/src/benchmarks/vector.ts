import { Vector3, Vec } from '@graphenks/g-mate'
import { measureAndLog } from '../utils/measureAndLog'

const iterationCount = 1000 * 1000

const dot3JS = (v0: Vector3, v1: Vector3) => {
    return Vec.dot(v0, v1)
}

const lengthJS = (v0: Vector3) => {
    return Vec.length(v0)
}

const v0 = Vec.new(4, 5, 6)
const v1 = Vec.new(1, 2, 3)

export const benchmarkVectorMath = () => {
    measureAndLog(
        () => {
            dot3JS(v0, v1)
        },
        iterationCount,
        'Dot product of vec3 with js impl'
    )

    measureAndLog(
        () => {
            lengthJS(v0)
        },
        iterationCount,
        'Length of vec3 with js impl'
    )
}
