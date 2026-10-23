FROM node:22-alpine AS build

WORKDIR /app

# Copy root and workspace package files
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY tools/safe-braces/package*.json ./tools/safe-braces/

# Install all dependencies including devDependencies for build
RUN npm install

# Copy application source code
COPY . .

# Run production build
RUN npm run build

# Production runtime stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy built application and required assets
COPY --from=build /app/dist ./dist
COPY --from=build /app/apps/web ./apps/web
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/tools ./tools

EXPOSE 3000

# Container healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/ || exit 1

CMD ["npm", "run", "start"]
