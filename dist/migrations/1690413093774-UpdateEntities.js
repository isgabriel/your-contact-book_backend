"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntities1690413093774 = void 0;
class UpdateEntities1690413093774 {
    constructor() {
        this.name = 'UpdateEntities1690413093774';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6"`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "id" SERIAL NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id")`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "name" character varying(256) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying(256) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying(20) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "registerDate" SET DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "userId"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "userId" integer`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "id" SERIAL NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(256) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(256) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(256) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(20) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "registerDate" SET DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
            yield queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "registerDate" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(11) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "name" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
            yield queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "users" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
            yield queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "userId"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "userId" uuid`);
            yield queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "registerDate" DROP DEFAULT`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying(11) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "name"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "name" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6"`);
            yield queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "id"`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id")`);
            yield queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.UpdateEntities1690413093774 = UpdateEntities1690413093774;
