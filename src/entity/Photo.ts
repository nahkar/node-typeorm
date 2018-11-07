import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Album } from './Album';
@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @ManyToMany(type => Album, album => album.photos)
  albums: Album[];
}
