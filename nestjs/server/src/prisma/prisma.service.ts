import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor () {
        super({
            datasources: {
                db: {
                    url: 'DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public'
                }
            }
        })
    }
}
