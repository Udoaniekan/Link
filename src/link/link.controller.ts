import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkDto } from 'src/dto/link.dto';

@Controller('link')
export class LinkController {
    constructor(private readonly linkService: LinkService) {}

    @Post('add') 
    async createlink(@Body() payload:LinkDto){
        return await this.linkService.addlink(payload)
    }

     @Get(':name')
    async findName(@Param('name') name: string) {
        return await this.linkService.findOneByName(name);
    }

    @Get(':id')
    async findId(@Param('id') id: number) {
        return await this.linkService.findOneById(id);
    }


    @Get()
    async findAllLink(){
        return await this.linkService.findAll()
    }
}
