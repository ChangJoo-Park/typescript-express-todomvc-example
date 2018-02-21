import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate
} from "typeorm"

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string

  @Column() isCompleted: boolean

  @Column() body: string

  @CreateDateColumn() createdAt: Date

  @UpdateDateColumn() updatedAt: Date

  @BeforeInsert()
  createDates() {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.isCompleted = false
  }

  @BeforeUpdate()
  updateDates() {
    this.updatedAt = new Date()
  }
}
