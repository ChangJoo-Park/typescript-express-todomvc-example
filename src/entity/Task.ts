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

  @OneToMany(type => Task, task => task.subTasks, {
    cascadeInsert: true,
    cascadeUpdate: true
  })
  subTasks: Task[] = [];

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

  @BeforeRemove()
  removeSubTasks () {
    this.subTasks.forEach(t => t.remove())
  }

  static findByCompleted () {
    return this.find({ where: { isCompleted: true } })
  }

  static findByIncompleted () {
    return this.find({ where: { isCompleted: false } })
  }
}
