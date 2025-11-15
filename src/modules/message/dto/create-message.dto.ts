import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({ description: 'Contenido del mensaje', example: 'Hola Mundo!' })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ description: 'Autor del mensaje', example: 'Usuario' })
  @IsNotEmpty()
  @IsString()
  author: string;
}
