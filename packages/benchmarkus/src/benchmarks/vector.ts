import { Vector3, Vec, Vector2, AnyVector } from '@graphenks/g-mate'
import { measureAndLog } from '../utils/measureAndLog'

const iterationCount = 1000 * 1000

const dot3JS = (v0: Vector3, v1: Vector3) => {
    return Vec.dot(v0, v1)
}

const lengthJS = (v0: Vector3) => {
    return Vec.length(v0)
}

const normalizeOverloaded = (v: Vector2) => {
    return Vec.normalize(v)
}

//the difference on average is 0.8ms over 1 million calls. Not worth the typing
const normalize2 = (v: Vector2) => {
    const vectorLength = Vec.length(v)
    return [v[0] / vectorLength, v[1] / vectorLength]
}

const v0 = Vec.new(4, 5, 6)
const v1 = Vec.new(1, 2, 3)
const v2 = Vec.new(1, 4)

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

    measureAndLog(
        () => {
            normalizeOverloaded(v2)
        },
        iterationCount,
        'Normalize with overloaded impl'
    )

    measureAndLog(
        () => {
            normalize2(v2)
        },
        iterationCount,
        'Normalize with vec2 impl'
    )
}
