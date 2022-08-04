import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Property extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 250,
    })
    address!: string;
}