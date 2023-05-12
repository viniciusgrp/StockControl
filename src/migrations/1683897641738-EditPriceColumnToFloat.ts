import { MigrationInterface, QueryRunner } from "typeorm";

export class EditPriceColumnToFloat1683897641738 implements MigrationInterface {
    name = 'EditPriceColumnToFloat1683897641738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
    }

}
