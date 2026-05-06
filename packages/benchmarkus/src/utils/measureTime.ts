export const measureTime = (callback: VoidFunction) => {
    const t0 = performance.now()

    callback()

    const t1 = performance.now()

    return t1 - t0
}
