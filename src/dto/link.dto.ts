import {IsNotEmpty, IsString, MaxLength, MinLength, IsNumber } from "class-validator"

export class LinkDto{
    @IsNotEmpty({message: 'name can not be empty'})
    @MinLength(4, {message: 'sorry please name should have a min of 4 characters'})
    @MaxLength(10, {message: 'sorry please name should have a max of 10 characters'})
    name: string;

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

}