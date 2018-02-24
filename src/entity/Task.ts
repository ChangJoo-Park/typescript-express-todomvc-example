import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  BeforeRemove
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
    this.isCompleted = false
  }

  @BeforeUpdate()
  updateDates() {
    this.updatedAt = new Date()
  }

  static findByCompleted () {
    return this.find({ where: { isCompleted: true } })
  }

  static findByIncompleted () {
    return this.find({ where: { isCompleted: false } })
  }
}
