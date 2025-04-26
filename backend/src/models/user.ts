import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Role } from './rol';
import { Team } from './team';
import { TeamMember } from './team-member';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'idUsers' })
  idUsers!: number;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email!: string;

  @Column({ type: 'text' })
  password!: string; // Se almacena con hash (por ejemplo, bcrypt)

  @ManyToOne(() => Role, { nullable: false })
  role_id!: Role; // Relación con la tabla de roles

  @CreateDateColumn({ name: 'created_at' })
  created_at!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at!: Date;

  @OneToMany(() => Team, team => team.created_by)
  createdTeams!: Team[];

  @OneToMany(() => TeamMember, teamMember => teamMember.user_id)
  teamMemberships!: TeamMember[];
}
