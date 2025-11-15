import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Message {
  @ApiProperty({ description: 'ID único del mensaje' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Contenido del mensaje' })
  @Column()
  content: string;

  @ApiProperty({ description: 'Autor del mensaje' })
  @Column()
  author: string;

  @ApiProperty({ description: 'Fecha de creación' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
