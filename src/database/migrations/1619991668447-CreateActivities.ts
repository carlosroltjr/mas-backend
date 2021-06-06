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
                        name: 'activityDate',
                        type: 'varchar'
                    },
                    {
                        name:'grade',
                        type:'decimal' 
                    },
                    {
                        name: 'courseUnitId',
                        type: 'varchar'
                    },
                    {
                        name: 'createdAt',
                        type: 'varchar',
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
