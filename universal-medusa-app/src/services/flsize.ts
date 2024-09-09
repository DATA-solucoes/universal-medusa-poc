import { TransactionBaseService } from "@medusajs/medusa";

interface createFLSizeDTO {
    label: string
    width: number
    height: number
}

export class flsizeService extends TransactionBaseService {
    getMessage() {
        return 'Hello to flsizeService!'
    }

    async create(data: createFLSizeDTO) {
        console.log(data)
        // const flsizeRepo = this.activeManager_.getRepository(Flsize)
        // return flsizeRepo.create(data)
    }
}

export default flsizeService