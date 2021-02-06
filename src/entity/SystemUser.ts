import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import  {BaseEntity} from "./BaseEntity";

@Entity({name: 'afw_SystemUsers'})
export class SystemUser extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
