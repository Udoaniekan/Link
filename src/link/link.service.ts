import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { link } from '../entities/link.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LinkService {
    constructor(@InjectRepository(link) private linkRepository:Repository<link>){}

    async addlink(payload){
    const add = await this.linkRepository.create(payload)
    return this.linkRepository.save(add)
    // or simply write:return await this.linkRepository.save(payload)
    }

    async findOneByName(name:string){
        const find = await this.linkRepository.findOne({where:{name:name}});
        if(!find){
            throw new HttpException('sorry no product found', 400 );
        }
        return find;
    }

    // find one by  id
    async findOneById(id:number){
        // const find = await this.linkRepository.findOneBy({id})
        const find = await this.linkRepository.findOne({where:{id:id}});

        // error handling
        if(!find){
            throw new HttpException('sorry no product found', 400 );
        }
        return find;
    }

    async findAll(){
        return await this.linkRepository.find()
    }
}
