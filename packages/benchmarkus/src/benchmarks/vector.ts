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

const addImmut = (v0: Vector3, v1: Vector3) => {
    return Vec.add(v0, v1)
}

const addMut = (v0: Vector3, v1: Vector3) => {
    return Vec.addMut(v0, v1)
}

const subtractImmut = (v0: Vector3, v1: Vector3) => {
    return Vec.subtract(v0, v1)
}

const subtractMut = (v0: Vector3, v1: Vector3) => {
    return Vec.subtractMut(v0, v1)
}

const multiplyImmut = (v0: Vector3, scalar: number) => {
    return Vec.multiply(v0, scalar)
}

const multiplyMut = (v0: Vector3, scalar: number) => {
    return Vec.multiplyMut(v0, scalar)
}

const normalizeImmut = (v0: Vector3) => {
    return Vec.normalize(v0)
}

const normalizeMut = (v0: Vector3) => {
    return Vec.normalizeMut(v0)
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

    measureAndLog(
        () => {
            addImmut(v0, v1)
        },
        iterationCount,
        'Add vec3`s with immutable impl'
    )

    measureAndLog(
        () => {
            addMut(v0, v1)
        },
        iterationCount,
        'Add vec3`s with mutable impl'
    )

    measureAndLog(
        () => {
            subtractImmut(v0, v1)
        },
        iterationCount,
        'Subtract vec3`s with immutable impl'
    )

    measureAndLog(
        () => {
            subtractMut(v0, v1)
        },
        iterationCount,
        'Subtract vec3`s with mutable impl'
    )

    measureAndLog(
        () => {
            multiplyImmut(v0, 2)
        },
        iterationCount,
        'Multiply vec3 by scalar with immutable impl'
    )

    measureAndLog(
        () => {
            multiplyMut(v0, 2)
        },
        iterationCount,
        'Multiply vec3 by scalar with mutable impl'
    )

    measureAndLog(
        () => {
            normalizeImmut(v0)
        },
        iterationCount,
        'Normalize vec3 with immutable impl'
    )

    measureAndLog(
        () => {
            normalizeMut(v0)
        },
        iterationCount,
        'Normalize vec3 with mutable impl'
    )
}
