import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column("int")
  count: number = 0;

  @Column("text")
  email: string = "";

  @Column("text")
  password: string = "";
}