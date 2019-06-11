"use strict";

import {
  Table,
  Column,
  Model,
  Unique,
  Length,
  AutoIncrement,
  PrimaryKey,
  DataType,
  BelongsToMany
} from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "m_user"
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Length({ min: 1, max: 100 })
  @Column
  userName: string;

  @Length({ min: 1, max: 100 })
  @Column
  firstName: string;

  @Length({ min: 1, max: 100 })
  @Column
  lastName: string;

  @Unique
  @Length({ min: 1, max: 100 })
  @Column({
    field: "email"
  })
  emailAddress: string;
}
