import { GettableComponentType } from './types'

export type GameObject = {
    getComponent: <T>(type: GettableComponentType) => T | undefined
}
