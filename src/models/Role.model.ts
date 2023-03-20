import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

export interface IRole {
    id: number
    name: string
}

@Table({
    tableName: "Role"
})
export default class Role extends Model implements IRole {

    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number

    @Column
    name!: string

}