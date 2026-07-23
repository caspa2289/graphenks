import { Vec } from '@graphenks/g-mate'
import { Mesh } from '@graphenks/s-engine'

export class ObjLoader {
    //FIXME: сделать загрузку по урлу
    static async loadFromUrl() {
        const data = `v 1.000000 1.000000 -1.000000
v 1.000000 -1.000000 -1.000000
v 1.000000 1.000000 1.000000
v 1.000000 -1.000000 1.000000
v -1.000000 1.000000 -1.000000
v -1.000000 -1.000000 -1.000000
v -1.000000 1.000000 1.000000
v -1.000000 -1.000000 1.000000`.split('\n')

        const rawData: Mesh[] = []

        let current = 0

        data.forEach((line: string) => {
            if (line[0] === 'o') {
                current++
                rawData[current] = {
                    vertexes: [],
                    uvs: [],
                    normals: [],
                    textureId: 'default',
                }
            }

            if (line[0] === 'v') {
                const data = line.split(' ')

                if (line[1] === 't') {
                    rawData[current].uvs.push(
                        Vec.new(Number(data[1]), Number(data[2]), 1)
                    )
                } else {
                    rawData[current].vertexes.push(
                        Vec.new(
                            Number(data[1]),
                            Number(data[2]),
                            Number(data[3]),
                            1
                        )
                    )
                }
            }
        })

        return rawData
    }
}
