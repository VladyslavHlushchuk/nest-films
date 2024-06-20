import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'films.sqlite',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), FilmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
