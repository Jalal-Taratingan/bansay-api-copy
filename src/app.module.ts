import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiabilityModule } from './liability/liability.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [LiabilityModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
