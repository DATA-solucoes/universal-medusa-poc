import { BaseEntity } from "@medusajs/medusa";
import { BeforeInsert, Column, Entity } from "typeorm";
import { generateEntityId } from '@medusajs/medusa/dist/utils'

@Entity()
export class Flsize extends BaseEntity {
    @Column()
    label: string;

    @Column()
    width: number;

    @Column()
    height: number;

    @BeforeInsert() 
    private beforeInsert():void {
        this.id = generateEntityId(this.id, 'flsize')
    }
}