import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from './team';
import { User } from './user';

@Entity('team_members')
export class TeamMember {
  @PrimaryGeneratedColumn({ name: 'idTeamMembers' })
  idTeamMembers!: number;

  @ManyToOne(() => Team, team => team.members, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'team_id' })
  team_id!: Team;

  @ManyToOne(() => User, user => user.teamMemberships, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user_id!: User;

  @CreateDateColumn({ name: 'joined_at' })
  joined_at!: Date;
}
