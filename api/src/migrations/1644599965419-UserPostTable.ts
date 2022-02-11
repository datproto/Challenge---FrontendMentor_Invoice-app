import {MigrationInterface, QueryRunner} from "typeorm";

export class UserPostTable1644599965419 implements MigrationInterface {
    name = 'UserPostTable1644599965419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`thumbnail\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fName\` varchar(255) NOT NULL, \`lName\` varchar(255) NOT NULL, \`uName\` varchar(255) NOT NULL, \`birth\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_posts\` (\`user_id\` int NOT NULL, \`post_id\` int NOT NULL, INDEX \`IDX_441391a3d99f2320003357c862\` (\`user_id\`), INDEX \`IDX_b6fd17d8e658cde20a4ad73045\` (\`post_id\`), PRIMARY KEY (\`user_id\`, \`post_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_posts\` ADD CONSTRAINT \`FK_441391a3d99f2320003357c8626\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_posts\` ADD CONSTRAINT \`FK_b6fd17d8e658cde20a4ad73045b\` FOREIGN KEY (\`post_id\`) REFERENCES \`post\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_posts\` DROP FOREIGN KEY \`FK_b6fd17d8e658cde20a4ad73045b\``);
        await queryRunner.query(`ALTER TABLE \`user_posts\` DROP FOREIGN KEY \`FK_441391a3d99f2320003357c8626\``);
        await queryRunner.query(`DROP INDEX \`IDX_b6fd17d8e658cde20a4ad73045\` ON \`user_posts\``);
        await queryRunner.query(`DROP INDEX \`IDX_441391a3d99f2320003357c862\` ON \`user_posts\``);
        await queryRunner.query(`DROP TABLE \`user_posts\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`post\``);
    }

}
