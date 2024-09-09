import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class PostCreate1725404643536 implements MigrationInterface {
    name = "PostCreate1725404643536"

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "post",
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: "now()"
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: "now()"
                    },

                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('post')
        await queryRunner.dropTable('post')
    }

}
