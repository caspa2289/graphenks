import { SEngine } from '@graphenks/s-engine'

const canvas = document.getElementById('canvas') as HTMLCanvasElement

const engine = new SEngine(canvas)

engine.init()
