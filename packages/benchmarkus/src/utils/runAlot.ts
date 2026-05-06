export const runALot = (callback: VoidFunction, iterationCount: number) => {
    for (let i = 0; i < iterationCount; i++) {
        callback()
    }
}
