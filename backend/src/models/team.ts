import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user';
import { TeamMember } from './team-member';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn({ name: 'idTeams' })
  idTeams!: number;

  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @ManyToOne(() => User, user => user.createdTeams, { nullable: false })
  created_by!: User;

  @CreateDateColumn({ name: 'created_at' })
  created_at!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at!: Date;

  @OneToMany(() => TeamMember, teamMember => teamMember.team_id, { cascade: true })
  members!: TeamMember[];
}
