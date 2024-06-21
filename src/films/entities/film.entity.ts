import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Film {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 255 })  
  name: string;

  @Column({ type: 'varchar' })
  genres: string; 

  @Column('text')
  description: string;

  @Column('date')
  releasedDate: Date;

  @Column('decimal', { precision: 4, scale: 2 })  
  rating: number;
}

