# Despliegue en Coolify - Backend API + PostgreSQL

## 📋 Requisitos Previos
- Cuenta en Coolify
- Repositorio Git con este código

## 🚀 Pasos para Desplegar en Coolify

### 1. Crear Nuevo Proyecto en Coolify
1. Accede a tu panel de Coolify
2. Crea un nuevo proyecto
3. Selecciona "Docker Compose" como tipo de despliegue

### 2. Conectar Repositorio
1. Conecta tu repositorio Git
2. Selecciona la rama que deseas desplegar (ej: `main` o `master`)
3. Establece el directorio raíz como: `logicai-cl-capacita-api-nestjs`

### 3. Configurar Variables de Entorno
En Coolify, configura las siguientes variables de entorno:

```env
NODE_ENV=production
PORT=3000

# Database - IMPORTANTE: Cambia estos valores por seguridad
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=TU_PASSWORD_SEGURO_AQUI
DB_DATABASE=nestdb
```

### 4. Configuración del Servicio
- **Puerto de la API**: 3000
- **Health Check**: `/api` (endpoint raíz de la API)
- **Dockerfile**: Ya está configurado en el proyecto
- **Docker Compose**: Ya está configurado en el proyecto

### 5. Desplegar
1. Haz clic en "Deploy"
2. Coolify automáticamente:
   - Construirá la imagen Docker
   - Levantará PostgreSQL
   - Ejecutará las migraciones
   - Iniciará la API

### 6. Verificar Despliegue
Una vez desplegado, verifica:
- API funcionando: `https://tu-dominio.com/api`
- Documentación Swagger: `https://tu-dominio.com/api-docs`

## 🔧 Comandos Útiles

### Ejecutar Migraciones Manualmente
```bash
docker-compose exec api npm run migration:run
```

### Ver Logs
```bash
docker-compose logs -f api
docker-compose logs -f postgres
```

### Acceder a la Base de Datos
```bash
docker-compose exec postgres psql -U postgres -d nestdb
```

## 📝 Notas Importantes

1. **Seguridad**: Cambia `DB_PASSWORD` por una contraseña segura
2. **Persistencia**: Los datos de PostgreSQL se guardan en un volumen Docker
3. **Migraciones**: Se ejecutan automáticamente al iniciar el contenedor
4. **CORS**: Asegúrate de configurar el dominio del frontend en las variables de entorno si es necesario

## 🔗 Conectar con el Frontend
Una vez desplegada la API, anota la URL pública (ej: `https://api.tu-dominio.com`)
Esta URL la necesitarás para configurar el frontend.

## 🐛 Troubleshooting

### La API no inicia
- Verifica que PostgreSQL esté saludable: `docker-compose ps`
- Revisa los logs: `docker-compose logs api`

### Error de conexión a la base de datos
- Verifica las variables de entorno
- Asegúrate que `DB_HOST=postgres` (nombre del servicio)

### Migraciones fallan
- Verifica que las entidades estén correctamente configuradas
- Ejecuta manualmente: `docker-compose exec api npm run migration:run`

