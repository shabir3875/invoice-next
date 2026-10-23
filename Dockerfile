FROM node:22-alpine AS build

WORKDIR /app

# Copy root and workspace package files
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY tools/safe-braces/package*.json ./tools/safe-braces/

# Install dependencies for build
RUN npm install

# Copy application source code
COPY . .

# Run production build
RUN npm run build

# Ultra-lightweight production web server (Nginx Alpine ~25MB total image size)
FROM nginx:alpine AS runner

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built production frontend assets
COPY --from=build /app/dist/apps/web /usr/share/nginx/html

# Configure Nginx to serve on port 3000 with SPA routing fallback
RUN printf 'server {\n\
    listen 3000;\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
\n\
    location /assets/ {\n\
        expires 1y;\n\
        add_header Cache-Control "public, no-transform";\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 3000

HEALTHCHECK --interval=15s --timeout=3s --start-period=3s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
