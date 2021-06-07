import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1619991668447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'activities',
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
                        name:'grade',
                        type:'decimal' 
                    },
                    {
                        name: 'activityDate',
                        type: 'timestamp'
                    },
                    {
                        name: 'courseUnitId',
                        type: 'varchar'
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'ActivityCourseUnit',
                        referencedTableName: 'courseUnits',
                        referencedColumnNames: ['id'],
                        columnNames: ['courseUnitId']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('activities')
    }

}
