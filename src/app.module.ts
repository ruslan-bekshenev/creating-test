import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), QuestionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
