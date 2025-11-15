import { DataSource } from 'typeorm';
import { Message } from '../entities';

export async function seedMessages(dataSource: DataSource): Promise<void> {
  const messageRepository = dataSource.getRepository(Message);

  // Verificar si ya existen mensajes
  const count = await messageRepository.count();
  if (count > 0) {
    console.log('✓ Messages already seeded, skipping...');
    return;
  }

  const messages = [
    {
      content: '¡Bienvenido al sistema de mensajes!',
      author: 'Sistema',
    },
    {
      content: 'Este es un mensaje de ejemplo',
      author: 'Admin',
    },
    {
      content: 'Puedes crear tus propios mensajes usando la API',
      author: 'Sistema',
    },
  ];

  await messageRepository.save(messages);
  console.log('✓ Messages seeded successfully');
}
