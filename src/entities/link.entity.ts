import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class link extends Base{
    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    price: string;




 
}