import { measureAndLog } from '../utils/measureAndLog'

const iterationCount = 1000000

type ObjectMatrix = {
    0: number
    1: number
    2: number
    3: number
    4: number
    5: number
    6: number
    7: number
    8: number
    9: number
    10: number
    11: number
    12: number
    13: number
    14: number
    15: number
}

const mutateJSArray = (array: number[]) => {
    array[0] = 7.199999809265137
    array[1] = 7.199999809265137
    array[2] = 7.199999809265137
    array[3] = 7.199999809265137
    array[4] = 7.199999809265137
    array[5] = 7.199999809265137
    array[6] = 7.199999809265137
    array[7] = 7.199999809265137
    array[8] = 7.199999809265137
    array[9] = 7.199999809265137
    array[10] = 7.199999809265137
    array[11] = 7.199999809265137
    array[12] = 7.199999809265137
    array[13] = 7.199999809265137
    array[14] = 7.199999809265137
    array[15] = 7.199999809265137
}

const mutateJSArrayForLoop = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = 1
    }
}

const immutableSpreadJSArray = (array: number[]) => {
    const newArray = [...array]
    return newArray
}

const immutableAssignJSArray = (array: number[]) => {
    const newArray: number[] = []

    array.forEach((el, i) => {
        newArray[i] = el
    })
}

const immutableAssignJSArrayForLoop = (array: number[]) => {
    const newArray: number[] = []

    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i]
    }
}

const mutateObject = (matrix: ObjectMatrix) => {
    matrix[0] = 1
    matrix[1] = 1
    matrix[2] = 1
    matrix[3] = 1
    matrix[4] = 1
    matrix[5] = 1
    matrix[6] = 1
    matrix[7] = 1
    matrix[8] = 1
    matrix[9] = 1
    matrix[10] = 1
    matrix[11] = 1
    matrix[12] = 1
    matrix[13] = 1
    matrix[14] = 1
    matrix[15] = 1
}

const immutableSpreadObject = (matrix: ObjectMatrix) => {
    const newObject = { ...matrix }

    return matrix
}

const mutateTypedArray = (array: Float32Array) => {
    array[0] = 7.199999809265137
    array[1] = 7.199999809265137
    array[2] = 7.199999809265137
    array[3] = 7.199999809265137
    array[4] = 7.199999809265137
    array[5] = 7.199999809265137
    array[6] = 7.199999809265137
    array[7] = 7.199999809265137
    array[8] = 7.199999809265137
    array[9] = 7.199999809265137
    array[10] = 7.199999809265137
    array[11] = 7.199999809265137
    array[12] = 7.199999809265137
    array[13] = 7.199999809265137
    array[14] = 7.199999809265137
    array[15] = 7.199999809265137
}

export const benchmarkMatrixMutation = () => {
    const matrixJSArray = new Array(16).fill(7.199999809265137)
    const matrixJSObject: ObjectMatrix = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
        0: 0,
    }
    const matrixTypedArray = new Float32Array([...matrixJSArray])

    measureAndLog(
        () => {
            mutateJSArray(matrixJSArray)
        },
        iterationCount,
        'Mutating JS Array'
    )

    measureAndLog(
        () => {
            mutateJSArrayForLoop(matrixJSArray)
        },
        iterationCount,
        'Mutating JS Array in for loop'
    )

    measureAndLog(
        () => {
            const result = immutableAssignJSArrayForLoop(matrixJSArray)
        },
        iterationCount,
        'Copying JS Array via assigning in for loop'
    )

    measureAndLog(
        () => {
            const result = immutableAssignJSArray(matrixJSArray)
        },
        iterationCount,
        'Copying JS Array via assigning in forEach'
    )

    measureAndLog(
        () => {
            const result = immutableSpreadJSArray(matrixJSArray)
        },
        iterationCount,
        'Copying JS Array via spread'
    )

    measureAndLog(
        () => {
            mutateObject(matrixJSObject)
        },
        iterationCount,
        'Mutating Object'
    )

    measureAndLog(
        () => {
            immutableSpreadObject(matrixJSObject)
        },
        iterationCount,
        'Spreading Object'
    )

    measureAndLog(
        () => {
            mutateTypedArray(matrixTypedArray)
        },
        iterationCount,
        'Mutating Float32 Array'
    )
}
