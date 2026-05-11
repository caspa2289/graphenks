import { Matrix4 } from './types'

const identity = (): Matrix4 => {
    //prettier-ignore
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    ]
}

const projection = (
    aspectRatio: number,
    fovRad: number,
    zFar: number,
    zNear: number
): Matrix4 => {
    const d = zFar - zNear

    //prettier-ignore
    return [
        aspectRatio * fovRad, 0, 0, 0,
        0, fovRad, 0, 0,
        0, 0, zFar / (d), 1,
        0, 0, (-zFar * zNear) / (d), 0,
    ]
}

const translation = ({ x = 0, y = 0, z = 0 }): Matrix4 => {
    //prettier-ignore
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1,
    ]
}

const translate = (m: Matrix4, { x = 1, y = 1, z = 1 }): Matrix4 => {
    //prettier-ignore
    return [
        m[0], m[1], m[2], m[3],
        m[4], m[5], m[6], m[7],
        m[8], m[9], m[10], m[11],
        m[12] * x, m[13] * y, m[14] * z, m[15]
    ]
}

//X Y Z axis rotation in radians
//FIXME: Im not sure if that is going to work :D
//check out previous implementation
//Do i need an arbitrary axis rotation method?
const rotationGlobal = ({ x = 0, y = 0, z = 0 }): Matrix4 => {
    const sinX = Math.sin(x)
    const cosX = Math.cos(x)

    const sinY = Math.sin(y)
    const cosY = Math.cos(y)

    const sinZ = Math.sin(z)
    const cosZ = Math.cos(z)

    //prettier-ignore
    return [
        cosY * cosZ, sinZ, sinY, 0,
        -sinZ, cosX * cosZ, sinX, 0,
        -sinY,-sinX, cosX * cosY, 0,
        0, 0, 0, 1,
    ]
}

export const Matrix = {
    identity,
    projection,
    translation,
    translate,
    rotationGlobal,
}
