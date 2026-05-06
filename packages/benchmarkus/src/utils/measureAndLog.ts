import { measureTime } from './measureTime'
import { runALot } from './runAlot'

export const measureAndLog = (
    callback: VoidFunction,
    iterationCount: number,
    title: string
) => {
    const time = measureTime(() => {
        runALot(callback, iterationCount)
    })

    console.log(
        '%c' + `${title}: ` + '%c' + `${time}`,
        'background: #222; color: red; padding: 6px',
        'background: #222; color: limegreen; padding: 6px'
    )
}
