import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { OfficerController } from './officer/officer.controller';
import { OfficerService } from './officer/officer.service';
import { LiabilityModule } from './liability/liability.module';

@Module({
  imports: [LiabilityModule],
  controllers: [AppController, StudentController, OfficerController],
  providers: [AppService, StudentService, OfficerService],
})
export class AppModule {}
