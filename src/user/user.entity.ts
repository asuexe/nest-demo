import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  VIEWER = 'viewer',
  UPDATER = 'updater',
  SUPERUSER = 'superuser',
}


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.VIEWER })
  role: UserRole;
  

  @Column()
  phoneNo: string;
}
