# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:22-alpine
WORKDIR /app
# Instalar wget para healthcheck
RUN apk add --no-cache wget
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src ./src
COPY --from=builder /app/typeorm.config.ts ./typeorm.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
# Instalar ts-node y tsconfig-paths para migraciones
RUN npm install -g ts-node tsconfig-paths
EXPOSE 3000
CMD ["node", "dist/src/main.js"]

