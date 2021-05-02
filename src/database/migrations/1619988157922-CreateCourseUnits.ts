import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateCourseUnits1619988157922 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'courseUnits',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'description',
                        type: 'varchar'
                    },
                    {
                        name: 'createdAt',
                        type: 'varchar',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('courseUnits')
    }

}
