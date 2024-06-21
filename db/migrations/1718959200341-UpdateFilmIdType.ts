import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFilmIdType1718959200341 implements MigrationInterface {
    name = 'UpdateFilmIdType1718959200341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_film" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(255) NOT NULL, "genres" varchar NOT NULL, "description" text NOT NULL, "releasedDate" date NOT NULL, "rating" decimal(5,2) NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_film"("id", "name", "genres", "description", "releasedDate", "rating") SELECT "id", "name", "genres", "description", "releasedDate", "rating" FROM "film"`);
        await queryRunner.query(`DROP TABLE "film"`);
        await queryRunner.query(`ALTER TABLE "temporary_film" RENAME TO "film"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "film" RENAME TO "temporary_film"`);
        await queryRunner.query(`CREATE TABLE "film" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(200) NOT NULL, "genres" varchar NOT NULL, "description" text NOT NULL, "releasedDate" date NOT NULL, "rating" decimal(4,2) NOT NULL)`);
        await queryRunner.query(`INSERT INTO "film"("id", "name", "genres", "description", "releasedDate", "rating") SELECT "id", "name", "genres", "description", "releasedDate", "rating" FROM "temporary_film"`);
        await queryRunner.query(`DROP TABLE "temporary_film"`);
    }

}
