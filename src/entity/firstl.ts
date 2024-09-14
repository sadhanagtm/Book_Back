import {Entity, Column, CreateDateColumn, ObjectId, ObjectIdColumn} from 'typeorm'

@Entity()
export class FirstOne{
    @ObjectIdColumn()
        Id:ObjectId

        @Column()
        First:string

        @Column()
        Age:number

        @CreateDateColumn()
        createdat:Date

        
}
    