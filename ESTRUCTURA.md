# 📁 Estructura del Proyecto

Este proyecto sigue una **arquitectura empresarial** organizada y escalable para aplicaciones NestJS.

## 🏗️ Estructura de Directorios

```
src/
├── core/                           # Núcleo de la aplicación
│   ├── config/                     # Configuraciones centralizadas
│   │   ├── database.config.ts      # Configuración de TypeORM y DataSource
│   │   ├── app.config.ts           # Configuración de la aplicación
│   │   └── index.ts                # Barrel export
│   └── database/                   # Todo lo relacionado con la base de datos
│       ├── entities/               # Entidades de TypeORM (modelos)
│       │   ├── message.entity.ts
│       │   └── index.ts
│       ├── migrations/             # Migraciones de base de datos
│       │   └── .gitkeep
│       └── seeds/                  # Datos iniciales (seeders)
│           ├── message.seed.ts
│           └── index.ts
├── modules/                        # Módulos de la aplicación
│   └── message/                    # Módulo de mensajes
│       ├── dto/                    # Data Transfer Objects
│       │   └── create-message.dto.ts
│       ├── message.controller.ts   # Controlador
│       ├── message.service.ts      # Lógica de negocio
│       └── message.module.ts       # Módulo NestJS
├── app.module.ts                   # Módulo raíz
└── main.ts                         # Punto de entrada
```

## 🎯 Ventajas de esta Estructura

### 1. **Separación de Responsabilidades**
- **core/**: Funcionalidad compartida y configuración
- **modules/**: Lógica de negocio organizada por dominio
- **entities/**: Modelos de datos centralizados

### 2. **Escalabilidad**
- Fácil agregar nuevos módulos sin afectar los existentes
- Configuración centralizada facilita cambios globales

### 3. **Mantenibilidad**
- Código organizado y fácil de encontrar
- Convenciones claras para todo el equipo

### 4. **Control de Base de Datos**
- Migraciones para versionado de esquema
- Seeds para datos iniciales consistentes

## 📝 Scripts Disponibles

### Desarrollo
```bash
npm run start:dev          # Modo desarrollo con hot-reload
npm run start:debug        # Modo debug
```

### Producción
```bash
npm run build              # Compilar
npm run start:prod         # Ejecutar en producción
```

### Base de Datos

#### Migraciones
```bash
# Generar migración automáticamente desde entidades
npm run migration:generate -- src/core/database/migrations/NombreMigracion

# Crear migración vacía
npm run migration:create -- src/core/database/migrations/NombreMigracion

# Ejecutar migraciones pendientes
npm run migration:run

# Revertir última migración
npm run migration:revert

# Ver estado de migraciones
npm run migration:show
```

#### Seeds
```bash
# Ejecutar seeders (datos iniciales)
npm run seed
```

### Testing
```bash
npm run test               # Tests unitarios
npm run test:watch         # Tests en modo watch
npm run test:cov           # Tests con cobertura
npm run test:e2e           # Tests end-to-end
```

### Calidad de Código
```bash
npm run lint               # Linter
npm run format             # Formatear código
```

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env` basado en `.env.example`:

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=nestdb

# Application
PORT=3000
NODE_ENV=development
CORS_ORIGINS=http://localhost:4200
```

### Docker
```bash
# Levantar solo PostgreSQL
docker-compose up -d postgres

# Ver logs
docker-compose logs -f postgres

# Detener
docker-compose down
```

## 🚀 Flujo de Trabajo Recomendado

### 1. Desarrollo Local
```bash
# 1. Levantar base de datos
docker-compose up -d postgres

# 2. Ejecutar seeds (primera vez)
npm run seed

# 3. Iniciar aplicación
npm run start:dev
```

### 2. Agregar Nueva Entidad
```bash
# 1. Crear entidad en src/core/database/entities/
# 2. Exportarla en src/core/database/entities/index.ts
# 3. Generar migración
npm run migration:generate -- src/core/database/migrations/AddNuevaEntidad
# 4. Ejecutar migración
npm run migration:run
```

### 3. Agregar Nuevo Módulo
```bash
# 1. Crear carpeta en src/modules/nombre-modulo/
# 2. Crear controller, service, module
# 3. Importar en app.module.ts
```

## 📚 Recursos

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [Swagger/OpenAPI](https://swagger.io/)

## 🎓 Convenciones

- **Nombres de archivos**: kebab-case (ej: `message.service.ts`)
- **Nombres de clases**: PascalCase (ej: `MessageService`)
- **Nombres de variables**: camelCase (ej: `messageRepository`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `DATABASE_CONFIG`)

