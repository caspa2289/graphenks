import { AnyVector, Vector2, Vector3, Vector4 } from './types'

function new_(x?: number, y?: number): Vector2
function new_(x?: number, y?: number, z?: number): Vector3
function new_(x?: number, y?: number, z?: number, w?: number): Vector4
function new_(x?: number, y?: number, z?: number, w?: number): AnyVector {
    if (w) {
        return [x, y, z, w] as Vector4
    }

    if (z) {
        return [x, y, z] as Vector3
    }

    if (!y) {
        throw new Error('cannot construct a vector of length 1')
    }

    return [x, y] as Vector2
}

function cross(v0: Vector2, v1: Vector2): Vector2
function cross(v0: Vector3, v1: Vector3): Vector3
function cross(v0: Vector4, v1: Vector4): Vector4
function cross(v0: AnyVector, v1: AnyVector): AnyVector {
    //TODO: benchmark switch vs ifelse vs static map
    switch (v0.length) {
        case 4: {
            return [
                v0[1] * (v1[2] as number) - v0[2] * v1[1],
                (v1[2] as number) * v1[0] - v0[0] * (v1[2] as number),
                v0[0] * v1[1] - v0[1] * v1[0],
                1,
            ]
        }
        case 3: {
            return [
                v0[1] * (v1[2] as number) - v0[2] * v1[1],
                (v1[2] as number) * v1[0] - v0[0] * (v1[2] as number),
                v0[0] * v1[1] - v0[1] * v1[0],
            ]
        }
        default: {
            return [0, v0[0] * v1[1] - v0[1] * v1[0]]
        }
    }
}

function dot(v0: Vector2, v1: Vector2): number
function dot(v0: Vector3, v1: Vector3): number
function dot(v0: Vector4, v1: Vector4): number
function dot(v0: AnyVector, v1: AnyVector): number {
    return v0[0] * v1[0] + v0[1] * v1[1] + (v0?.[2] ?? 0) * (v1?.[2] ?? 0)
}

function length(v: AnyVector): number {
    return Math.sqrt(lengthSquared(v))
}

//this is suitable for most use cases
function lengthSquared(v: AnyVector): number {
    //To keep type safety. Don`t wanna make a separate function for that case alone
    return dot(v as Vector3, v as Vector3)
}

function normalize(v: AnyVector): AnyVector {
    const vectorLength = length(v)

    switch (v.length) {
        case 4:
            return [
                v[0] / vectorLength,
                v[1] / vectorLength,
                v[2] / vectorLength,
                v[3],
            ]
        case 3:
            ;[v[0] / vectorLength, v[1] / vectorLength, v[2] / vectorLength]
        default:
            return [v[0] / vectorLength, v[1] / vectorLength]
    }
}

//Do that instead of static class properties because some sort of constructing still happens for static methods and me no like that
export const Vec = {
    new: new_,
    cross,
    dot,
    length,
    lengthSquared,
    normalize,
}

//TODO: add some tests ffs
