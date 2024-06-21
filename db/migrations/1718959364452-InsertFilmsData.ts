import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertFilmsData1718959364452 implements MigrationInterface {
    name = 'InsertFilmsData1718959364452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_film" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(255) NOT NULL, "genres" varchar NOT NULL, "description" text NOT NULL, "releasedDate" date NOT NULL, "rating" decimal(4,2) NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_film"("id", "name", "genres", "description", "releasedDate", "rating") SELECT "id", "name", "genres", "description", "releasedDate", "rating" FROM "film"`);
        await queryRunner.query(`DROP TABLE "film"`);
        await queryRunner.query(`ALTER TABLE "temporary_film" RENAME TO "film"`);
        await queryRunner.query(`INSERT INTO "film"("id", "name", "genres", "description", "releasedDate", "rating") VALUES 
            ('1', 'The Green Mile', 'Crime', 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.', '1999-12-10', 8.6),
            ('2', 'The Usual Suspects', 'Crime', 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a random police lineup.', '1995-08-16', 8.5),
            ('3', 'The Lion King', 'Animation', 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', '1994-06-24', 8.5),
            ('4', 'The Pianist', 'Biography', 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.', '2002-09-25', 8.5),
            ('5', 'Gladiator', 'Action', 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', '2000-05-05', 8.5),
            ('6', 'The Departed', 'Crime', 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.', '2006-10-06', 8.5),
            ('7', 'The Prestige', 'Drama', 'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.', '2006-10-20', 8.5),
            ('8', 'The Intouchables', 'Biography', 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.', '2011-11-02', 8.5),
            ('9', 'Whiplash', 'Drama', 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student''s potential.', '2014-10-10', 8.5),
            ('10', 'The Lives of Others', 'Drama', 'In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.', '2006-03-23', 8.4),
            ('11', 'The Great Dictator', 'Comedy', 'Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel''s regime.', '1940-10-15', 8.4),
            ('12', 'American History X', 'Drama', 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.', '1998-10-30', 8.4),
            ('13', 'The Hunt', 'Drama', 'A teacher lives a lonely life, all the while struggling over his son''s custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.', '2012-10-25', 8.3),
            ('14', 'Inglourious Basterds', 'Adventure', 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner''s vengeful plans for the same.', '2009-08-21', 8.3),
            ('15', 'Snatch', 'Crime', 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.', '2000-08-23', 8.3),
            ('16', '3 Idiots', 'Comedy', 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.', '2009-12-25', 8.3),
            ('17', 'Oldboy', 'Action', 'After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.', '2003-11-21', 8.4),
            ('18', 'The Shining', 'Horror', 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.', '1980-05-23', 8.4),
            ('19', 'Coco', 'Animation', 'Aspiring musician Miguel, confronted with his family''s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.', '2017-11-22', 8.4),
            ('20', 'Amélie', 'Comedy', 'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and discovers love along the way.', '2001-04-25', 8.3),
            ('21', 'Django Unchained', 'Drama', 'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.', '2012-12-25', 8.4),
            ('22', 'WALL·E', 'Animation', 'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.', '2008-06-27', 8.4);`);
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "film" RENAME TO "temporary_film"`);
        await queryRunner.query(`CREATE TABLE "film" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(255) NOT NULL, "genres" varchar NOT NULL, "description" text NOT NULL, "releasedDate" date NOT NULL, "rating" decimal(5,2) NOT NULL)`);
        await queryRunner.query(`INSERT INTO "film"("id", "name", "genres", "description", "releasedDate", "rating") SELECT "id", "name", "genres", "description", "releasedDate", "rating" FROM "temporary_film"`);
        await queryRunner.query(`DROP TABLE "temporary_film"`);
    }

}
