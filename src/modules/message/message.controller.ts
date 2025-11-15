import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from '../../core/database/entities';

@ApiTags('messages')
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo mensaje' })
  @ApiResponse({
    status: 201,
    description: 'Mensaje creado exitosamente',
    type: Message,
  })
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.messageService.create(createMessageDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los mensajes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de mensajes',
    type: [Message],
  })
  findAll(): Promise<Message[]> {
    return this.messageService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un mensaje por ID' })
  @ApiResponse({
    status: 200,
    description: 'Mensaje encontrado',
    type: Message,
  })
  @ApiResponse({ status: 404, description: 'Mensaje no encontrado' })
  findOne(@Param('id') id: string): Promise<Message | null> {
    return this.messageService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un mensaje por ID' })
  @ApiResponse({
    status: 200,
    description: 'Mensaje eliminado exitosamente',
  })
  @ApiResponse({ status: 404, description: 'Mensaje no encontrado' })
  remove(@Param('id') id: string): Promise<void> {
    return this.messageService.remove(+id);
  }
}
