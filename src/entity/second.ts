import { Entity,Column, CreateDateColumn, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class SecondOne{

    @ObjectIdColumn()
    Id:ObjectId

    @Column()
    Second:string

    @Column()
    Age:number

    @Column()
    Contact:number

    @CreateDateColumn()
    createdat:Date

}