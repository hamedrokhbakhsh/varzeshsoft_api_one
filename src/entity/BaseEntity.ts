import {Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuidv4} from 'uuid';



export abstract class BaseEntity{


    @Column({name: 'UserName'})
    UserName: string;

    @Column({name: 'LoginPassword'})
    LoginPassword?:string;

    @Column({name: 'Name'})
    Name?: string;

    @Column({name: 'MobilePhoneNumber'})
    MobilePhoneNumber: string;

    @Column({name:'OrganizationalPosition'})
    OrganizationalPosition: string;

    @Column({name: 'InternalPhoneLineNumber'})
    InternalPhoneLineNumber?:number


    @Column({name: 'IsAmin'})
    IsAmin: boolean= false ;


    @Column({name:'HideUser'})
    HideUser: boolean = true;

    @Column({name: 'Gender'})
    Gender?: string

    @Column({name: 'IsActive'})
    IsActive: boolean = true ;

    @Column({name: 'ShowOnLoginForm'})
    ShowOnLoginForm: boolean = false;

    @Column({name: 'ValidIpAddresses'})
    ValidIpAddresses?: string;

    @Column({name: 'TempPasswordLogin_LastPasswordSendTime'})
    TempPasswordLogin_LastPasswordSendTime?: Date ;

    @Column({name: 'TempPasswordLogin_LastSentPassword'})
    TempPasswordLogin_LastSentPassword?: string

}