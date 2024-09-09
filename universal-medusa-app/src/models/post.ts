import { BaseEntity, generateEntityId } from "@medusajs/medusa";
import { BeforeInsert, Column, Entity } from "typeorm";

@Entity() 
export class Post extends BaseEntity {
    @Column({type: 'varchar'})
    title: string | null

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, 'post')
    }
    
}