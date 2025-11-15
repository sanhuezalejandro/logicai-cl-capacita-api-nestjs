import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './modules/message/message.module';
import { databaseConfig } from './core/config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
