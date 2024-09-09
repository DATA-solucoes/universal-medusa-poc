import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import flsizeService from "src/services/flsize";
import coverService from "src/services/fotolivro/cover";



export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
    const sizeService: flsizeService = req.scope.resolve('flsizeService')
    const coverService: coverService = req.scope.resolve('coverService')

    res.json({
        message: await sizeService.getMessage(),
        covers: await coverService.getCover(),
        sizes: [
            {
                label: '20x20(Quadrado)',
                width: 20,
                height: 20
            }
        ]
    })
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {

    const sizeService: flsizeService = req.scope.resolve(`flsizeService`)

    const { label, width, height } = req.body as {label: string, width: number, height: number}

    if (!label || !width || !height) {
        throw new Error("`Unprocessable entity. 422")
    }

    const size = await sizeService.create({label, width, height})

    res.json({
        message: 'data received!'
    })
}