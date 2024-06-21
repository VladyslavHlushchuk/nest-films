import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1718926225230 implements MigrationInterface {
    name = 'NewMigration1718926225230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "film" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(200) NOT NULL, "genres" varchar NOT NULL, "description" text NOT NULL, "releasedDate" date NOT NULL, "rating" decimal(4,2) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "film"`);
    }

}
