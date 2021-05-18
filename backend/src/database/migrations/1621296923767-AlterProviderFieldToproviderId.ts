import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AlterProviderFieldToproviderId1621296923767 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('appointments', 'provider');
        
        await queryRunner.addColumn('appointments', 
            new TableColumn({
                name: 'provider_id',
                type: 'uuid',
                isNullable:true,
            }),        
        );

        await queryRunner.createForeignKey('appointments', 
            new TableForeignKey({
                name: 'fk_appointment_user',
                columnNames: ['provider_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('appoitments', 'fk_appointment_user');
        
        await queryRunner.dropColumn('appointments', 'provider_id');

        await queryRunner.addColumn('appointments', 
            new TableColumn({
                name: 'provider',
                type: 'varchar',
            }),
        );
    }
}
