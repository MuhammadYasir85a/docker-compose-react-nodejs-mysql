# ============================================
# FRONTEND DOCKERFILE — Enterprise Multi-Stage
# Project: TEKSEL Azure CI/CD Lab
# ============================================

# ── Stage 1: Build React App ──────────────────
FROM node:18-alpine AS build

WORKDIR /app

# Fix for old React + new Node OpenSSL conflict
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy package files first (cache optimization)
COPY package*.json ./

# Install ALL dependencies (including dev - needed to build)
RUN npm ci

# Copy source code
COPY . .

# Accept backend URL as build argument
ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

# Build React app into static files
RUN npm run build

# ── Stage 2: Serve with Nginx ─────────────────
FROM nginx:alpine

# Copy built static files to nginx serving directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]