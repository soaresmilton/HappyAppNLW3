import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602594546359 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // O MÉTODO UP SERVE PARA: realizar alterações no banco de dados
    //criar nova tabela, criar novo campo, deletar campo, etc
    
    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision:2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision:2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // O MÉTODO DOWN SERVE PARA: desfazer o que a gente fez no método UP

    await queryRunner.dropTable('orphanages');
  }

}
