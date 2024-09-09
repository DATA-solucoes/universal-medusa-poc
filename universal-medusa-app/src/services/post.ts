import { TransactionBaseService } from "@medusajs/medusa";
import { Post } from "../models/post";

interface createPostDTO {
    title: string
}

export class postService extends TransactionBaseService {
    getMessage() {
        return 'Hello to postService!'
    }

    async create(data: createPostDTO) {
        const postRepo = this.activeManager_.getRepository(Post)
        const newPost = postRepo.create()
        newPost.title = data.title

        const result  = await postRepo.save(newPost)
        console.log(result)
        
        // const flsizeRepo = this.activeManager_.getRepository(Flsize)
        // return flsizeRepo.create(data)
    }
}

export default postService