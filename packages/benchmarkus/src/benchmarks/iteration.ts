import { measureAndLog } from '../utils/measureAndLog'

const iterationCount = 1000000

const withForEachJSArray = (array: number[]) => {
    array.forEach((item, index) => {
        return index
    })
}

const withForLoopJSArray = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
        return array[i]
    }
}

const withForLoopJSArrayL = (array: number[]) => {
    for (let i = 0, length = array.length; i < length; i++) {
        return array[i]
    }
}

const forEachMut = (
    array: number[],
    callback: (item: number, index: number) => void
) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i)
    }
}

const withForEachMutJSArray = (array: number[]) => {
    forEachMut(array, (index) => {
        return index
    })
}

export const benchmarkIteration = () => {
    const array = new Array(16).fill(1)

    measureAndLog(
        () => {
            withForEachJSArray(array)
        },
        iterationCount,
        'Iterating JS Array with forEach'
    )

    measureAndLog(
        () => {
            withForEachMutJSArray(array)
        },
        iterationCount,
        'Iterating JS Array with mutable forEach'
    )

    measureAndLog(
        () => {
            withForLoopJSArray(array)
        },
        iterationCount,
        'Iterating JS Array with for loop'
    )

    measureAndLog(
        () => {
            withForLoopJSArrayL(array)
        },
        iterationCount,
        'Iterating JS Array with for loop (old fixed length trick)'
    )
}
