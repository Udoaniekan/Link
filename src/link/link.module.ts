import { Module } from '@nestjs/common';
import { LinkController } from './link.controller';
import { LinkService } from './link.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { link } from 'src/entities/link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([link])],
  controllers: [LinkController],
  providers: [LinkService]
})
export class LinkModule {}
