import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn({ name: 'idRoles' })
  idRoles!: number;

  @Column({ type: 'varchar', length: 50, unique: true })
  name!: string;
}
