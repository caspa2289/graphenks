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
    //DONE: benchmark switch vs ifelse vs static map
    //if is on par with separate implementations somehow :D
    if (v0.length === 4) {
        return [
            v0[1] * (v1[2] as number) - v0[2] * v1[1],
            (v1[2] as number) * v1[0] - v0[0] * (v1[2] as number),
            v0[0] * v1[1] - v0[1] * v1[0],
            1,
        ]
    }

    if (v0.length === 2) {
        return [0, v0[0] * v1[1] - v0[1] * v1[0]]
    }

    return [
        v0[1] * (v1[2] as number) - v0[2] * v1[1],
        (v1[2] as number) * v1[0] - v0[0] * (v1[2] as number),
        v0[0] * v1[1] - v0[1] * v1[0],
    ]
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

    if (v.length === 4) {
        return [
            v[0] / vectorLength,
            v[1] / vectorLength,
            v[2] / vectorLength,
            v[3],
        ]
    }

    if (v.length === 2) {
        return [v[0] / vectorLength, v[1] / vectorLength]
    }

    return [v[0] / vectorLength, v[1] / vectorLength, v[2] / vectorLength]
}

function add(v0: Vector2, v1: Vector2): Vector2
function add(v0: Vector3, v1: Vector3): Vector3
function add(v0: Vector4, v1: Vector4): Vector4
function add(v0: AnyVector, v1: AnyVector): AnyVector {
    if (v0.length === 4) {
        return [v0[0] + v1[0], v0[1] + v1[1], v0[2] + (v1[2] as number), v0[3]]
    }

    if (v0.length === 2) {
        return [v0[0] + v1[0], v0[1] + v1[1]]
    }

    return [v0[0] + v1[0], v0[1] + v1[1], v0[2] + (v1[2] as number)]
}

function subtract(v0: Vector2, v1: Vector2): Vector2
function subtract(v0: Vector3, v1: Vector3): Vector3
function subtract(v0: Vector4, v1: Vector4): Vector4
function subtract(v0: AnyVector, v1: AnyVector): AnyVector {
    if (v0.length === 4) {
        return [v0[0] - v1[0], v0[1] - v1[1], v0[2] - (v1[2] as number), v0[3]]
    }

    if (v0.length === 2) {
        return [v0[0] - v1[0], v0[1] - v1[1]]
    }

    return [v0[0] - v1[0], v0[1] - v1[1], v0[2] - (v1[2] as number)]
}

function multiply(v: Vector2, scalar: number): Vector2
function multiply(v: Vector3, scalar: number): Vector3
function multiply(v: Vector4, scalar: number): Vector4
function multiply(v: AnyVector, scalar: number): AnyVector {
    if (v.length === 4) {
        return [v[0] * scalar, v[1] * scalar, v[2] * scalar, v[3]]
    }

    if (v.length === 2) {
        return [v[0] * scalar, v[1] * scalar]
    }

    return [v[0] * scalar, v[1] * scalar, v[2] * scalar]
}

function divide(v: Vector2, scalar: number): Vector2
function divide(v: Vector3, scalar: number): Vector3
function divide(v: Vector4, scalar: number): Vector4
function divide(v: AnyVector, scalar: number): AnyVector {
    if (v.length === 4) {
        return [v[0] / scalar, v[1] / scalar, v[2] / scalar, v[3]]
    }

    if (v.length === 2) {
        return [v[0] / scalar, v[1] / scalar]
    }

    return [v[0] / scalar, v[1] / scalar, v[2] / scalar]
}

//Do that instead of static class properties because some sort of constructing still happens for static methods and me no like that
export const Vec = {
    new: new_,
    cross,
    dot,
    length,
    lengthSquared,
    //TODO: benchmark mut versions of these
    normalize,
    add,
    subtract,
    multiply,
    divide,
}

//TODO: add some tests ffs
