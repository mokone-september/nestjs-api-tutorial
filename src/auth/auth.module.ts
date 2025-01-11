import { Module } from '@nestjs/common';
import { AuthController } from './auth.contreller';
import { AuthService } from './auth.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
