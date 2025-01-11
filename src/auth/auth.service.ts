import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private primsa: PrismaService) {}
  signup() {
    return { msg: 'I have sign Up' };
  }

  signin() {
    return { msg: 'I have sign In' };
  }
}
