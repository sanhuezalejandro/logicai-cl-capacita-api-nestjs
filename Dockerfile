# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Instalar todas las dependencias (incluyendo devDependencies para el build)
RUN npm ci --include=dev
COPY . .
# Verificar que nest CLI esté disponible y hacer build
RUN npx nest build

# Stage 2: Production
FROM node:22-alpine
WORKDIR /app
# Instalar wget para healthcheck
RUN apk add --no-cache wget
COPY package*.json ./
# Instalar todas las dependencias (incluyendo devDependencies para migraciones)
RUN npm ci --include=dev && npm cache clean --force
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src ./src
COPY --from=builder /app/typeorm.config.ts ./typeorm.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
EXPOSE 3000
CMD ["node", "dist/src/main.js"]

