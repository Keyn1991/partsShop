import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Part {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('decimal')
    price: number;

    @Column({ default: 10 })
    stock: number;
}