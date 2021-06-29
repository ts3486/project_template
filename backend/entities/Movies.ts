import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  title: string = "";

  @Column()
  rating: number = 0;

  @Column()
  genre: string = "";
}