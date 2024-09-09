import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import flsizeService from "src/services/flsize";
import coverService from "src/services/fotolivro/cover";
import postService from "src/services/post";



// export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
//     const sizeService: flsizeService = req.scope.resolve('flsizeService')
//     const coverService: coverService = req.scope.resolve('coverService')

//     res.json({
//         message: await sizeService.getMessage(),
//         covers: await coverService.getCover(),
//         sizes: [
//             {
//                 label: '20x20(Quadrado)',
//                 width: 20,
//                 height: 20
//             }
//         ]
//     })
// }

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {

    const postService: postService = req.scope.resolve(`postService`)

    const { title } = req.body as {title: string}

    if (!title) {
        throw new Error("`Unprocessable entity. 422")
    }

    const post = await postService.create({title})

    res.json({
        message: 'data received!'
    })
}