import { TransactionBaseService } from "@medusajs/medusa";

export class coverService extends TransactionBaseService {
    getCover() {
        return [
            {
                label: 'Cover 1',
                id: 1
            },
            {
                label: 'Cover 2',
                id: 2
            },
            {
                label: 'Cover 3',
                id: 3
            },
            
        ]
    }
}

export default coverService