import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { link } from './entities/link.entity';
import { LinkModule } from './link/link.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'linkdatabase',
      entities: [link],
      synchronize: true,
    }),
    LinkModule
  ],
})
export class AppModule {}
