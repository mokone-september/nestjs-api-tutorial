import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@primsa/client';

@Injectable()
export class PrismaService extends PrimaClient {
  constructor() {
    super({
        datasource: {
            db: {
          url: ''
            },
        },
    });
  }
}
