import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  username: string = "";

  @Column()
  image: number = 0;

  @Column()
  description: string = "";
}